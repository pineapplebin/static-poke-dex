<script lang="ts">
  import { browser } from '$app/env';
  import { fade } from 'svelte/transition';
  import { draggable } from '../../utils/actions/draggable';
  import type { TPosition } from '../../utils/actions/draggable';
  import { normalizeStyle } from '../../utils/styles';

  export let threshold = 300;
  export let open = false;

  let disabled = false;
  let touchStartPosition = 0;
  let deltaPosition = 0;

  let flyIn = false;
  let timeout: number | null = null;
  $: {
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
    }
  }

  function handleDrag({ detail }: { detail: TPosition }) {
    deltaPosition = detail.y < touchStartPosition ? 0 : detail.y - touchStartPosition;
  }

  function handleCheckDragEnd() {
    if (deltaPosition < threshold) {
      deltaPosition = 0;
    } else {
      open = false;
      deltaPosition = 0;
    }
  }
</script>

{#if open}
  <div transition:fade={{ duration: 200 }} class="mask" on:click={() => (open = false)} />
{/if}

<div class="holder">
  <div
    class="content"
    class:fly-in={flyIn}
    class:fly-out={!open}
    use:draggable={{ disabled }}
    on:draggablestart={({ detail }) => (touchStartPosition = detail.y)}
    on:draggable={handleDrag}
    on:draggableend={handleCheckDragEnd}
    style={normalizeStyle({
      transform: disabled ? undefined : `translateY(${deltaPosition}px)`
    })}
  >
    <slot />
  </div>
</div>

<style>
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.32);
  }

  .holder {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
  }

  .content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 95vh;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 0 0 5px 5px #aaa;
    background-color: white;
  }

  .fly-in {
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;
  }

  .fly-out {
    transform: translateY(100%);
    transition: transform 0.2s ease-in-out;
  }
</style>
