<script lang="ts">
  import { browser } from '$app/env';
  import { setContext, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import { Icon } from '@smui/fab';
  import UIRoundButton from '../UIRoundButton.svelte';

  import { draggable, type TPosition } from '@/utils/actions/draggable';
  import { memoryData } from '@/shared/memoryData';
  import { normalizeStyle } from '@/utils/styles';

  import { CONTEXT_KEY } from './constants';
  import type { TContext } from './constants';

  let isActive = writable(false);
  $: {
    if (browser) {
      if ($isActive) {
        document.body.classList.add('mask');
      } else {
        document.body.classList.remove('mask');
      }
    }
  }

  onMount(() => {
    handleFlowToEdge();
  });

  function handleUpdatePos({ detail }: { detail: TPosition }) {
    $memoryData.magicButtonPos = {
      x: +(detail.x - 56 / 2).toFixed(2),
      y: +(detail.y - 56 / 2).toFixed(2)
    };
  }

  function handleFlowToEdge() {
    const width = window.innerWidth;

    const pos = { ...$memoryData.magicButtonPos };
    pos.x = width - 56;

    if (pos.y > window.innerHeight) {
      pos.y = 600;
    } else if (pos.y < 0) {
      pos.y = 600;
    }

    $memoryData.magicButtonPos = pos;
  }

  setContext<TContext>(CONTEXT_KEY, isActive);
</script>

{#if $isActive}
  <div transition:fade={{ duration: 100 }} class="mask" on:click={() => ($isActive = false)} />
{/if}

<div
  class="magic-button"
  style={normalizeStyle({
    transform: `translate(${$memoryData.magicButtonPos.x + ($isActive ? 0 : 40)}px, ${
      $memoryData.magicButtonPos.y
    }px)`
  })}
  use:draggable={{ disabled: !$isActive }}
  on:draggable={handleUpdatePos}
  on:draggableend={handleFlowToEdge}
>
  <div class="sub-buttons">
    <slot />
  </div>

  <UIRoundButton on:click={() => ($isActive = true)}>
    <Icon class="material-icons">key</Icon>
  </UIRoundButton>
</div>

<style>
  .magic-button {
    position: fixed;
    top: 0;
    left: 0;
    width: 56px;
    height: 56px;
    transition: transform 100ms ease-out;
    z-index: 11;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.32);
  }

  .sub-buttons {
    display: flex;
    row-gap: 10px;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 14px;
    margin-right: 8px;

    width: 120px;
    position: absolute;
    top: -14px;
    right: 0;
    transform: translateY(-100%);
  }
</style>
