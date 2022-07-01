<script lang="ts">
  import { browser } from '$app/env';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade } from 'svelte/transition';
  import Fab, { Icon } from '@smui/fab';

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

  setContext<TContext>(CONTEXT_KEY, isActive);
</script>

{#if $isActive}
  <div transition:fade={{ duration: 100 }} class="mask" on:click={() => ($isActive = false)} />
{/if}

<div class="magic-button" class:active={$isActive}>
  <div class="sub-buttons">
    <slot />
  </div>

  <Fab color="primary" on:click={() => ($isActive = true)}>
    <Icon class="material-icons">key</Icon>
  </Fab>
</div>

<style>
  .magic-button {
    position: fixed;
    bottom: 12px;
    right: 12px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(50px);
    z-index: 11;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .active {
    transform: translateX(0);
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
  }
</style>
