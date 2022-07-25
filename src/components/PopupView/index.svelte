<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { browser } from '$app/env';
  import { fade } from 'svelte/transition';
  import { draggable } from '@/utils/actions/draggable';
  import type { TPosition } from '@/utils/actions/draggable';
  import { normalizeStyle } from '@/utils/styles';

  const dispatch = createEventDispatcher<{ close: never }>();

  export let threshold = 300;
  export let distance = 300;
  export let open = false;

  let contentEl: HTMLDivElement;

  let disabled = false;
  let startDragging = false; // 拖拽控制开关
  let startTimestamp = 0; // 拖拽开始时间戳
  let touchStartPosition = 0; // 拖拽开始位置
  let deltaPosition = 0; // 拖拽距离

  let flyIn = false;
  let timeout: number | null = null;
  $: {
    // 上层控制打开时 有个飞入动画
    // 动画时间禁用拖拽
    if (open) {
      flyIn = true;
      disabled = true;
      timeout = window.setTimeout(() => {
        flyIn = false;
        disabled = false;
      }, 200);
      if (browser) {
        document.body.classList.add('mask');
      }
    } else {
      if (timeout) {
        window.clearTimeout(timeout);
        timeout = null;
      }
      disabled = true;
      if (browser) {
        document.body.classList.remove('mask');
      }
      dispatch('close');
    }
  }

  /**
   * 处理拖拽开始
   * 如果内容过长时 没滚动到内容顶部前禁用拖拽
   */
  function handleDragStart(startPos: number) {
    if (contentEl.scrollTop < 10) {
      startDragging = true;
      touchStartPosition = startPos;
      startTimestamp = Date.now();
    } else {
      startDragging = false;
    }
  }

  function handleDrag({ detail }: { detail: TPosition }) {
    if (!startDragging) {
      return;
    }
    deltaPosition = detail.y < touchStartPosition ? 0 : detail.y - touchStartPosition;
  }

  function handleCheckDragEnd() {
    if (!startDragging) {
      return;
    }

    // 如果时间比阈值短；或者大于预设距离 则关闭弹窗
    if (
      deltaPosition > 0 &&
      (Date.now() - startTimestamp < threshold || deltaPosition > distance)
    ) {
      open = false;
    }
    deltaPosition = 0;
  }
</script>

{#if open}
  <div transition:fade={{ duration: 200 }} class="mask" on:click={() => (open = false)} />
{/if}

<div class="holder">
  <div
    class="animation"
    class:fly-in={flyIn}
    class:fly-out={!open}
    use:draggable={{ disabled }}
    on:draggablestart={({ detail }) => handleDragStart(detail.y)}
    on:draggable={handleDrag}
    on:draggableend={handleCheckDragEnd}
    style={normalizeStyle({
      transform: disabled ? undefined : `translateY(${deltaPosition + 50}px)`
    })}
  >
    <div bind:this={contentEl} class="content">
      <slot />
    </div>
  </div>
</div>

<style>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 6;
    background: rgba(0, 0, 0, 0.32);
  }

  .holder {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 6;
    touch-action: pan-x pan-y;
  }

  .animation {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
  }

  .content {
    position: relative;
    height: 95%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.3);
    background-color: white;
    overflow: hidden auto;
  }

  .fly-in {
    transform: translateY(50px);
    transition: transform 0.2s ease-in-out;
  }

  .fly-out {
    transform: translateY(105%);
    transition: transform 0.2s ease-in-out;
  }
</style>
