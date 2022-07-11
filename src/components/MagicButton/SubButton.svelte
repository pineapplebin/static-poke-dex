<script lang="ts">
  import { getContext, createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import { Icon } from '@smui/fab';
  import UIRoundButton from '../UIRoundButton.svelte';
  import { CONTEXT_KEY } from './constants';
  import type { TContext } from './constants';

  export let name: string = '';
  export let icon: string = '';
  export let deactiveWhenClick = false;

  const dispatcher = createEventDispatcher<{ click: never }>();

  const isActive = getContext<TContext>(CONTEXT_KEY);

  function handleClick() {
    if (deactiveWhenClick) {
      isActive.update(() => false);
    }
    dispatcher('click');
  }
</script>

{#if $isActive}
  <div transition:fly={{ duration: 500, x: 500 }} class="sub-button">
    <div class="name">{name}</div>
    <UIRoundButton level="secondary" on:click={handleClick}>
      <Icon class="material-icons" style="color: black;">{icon}</Icon>
    </UIRoundButton>
  </div>
{/if}

<style lang="scss">
  .sub-button {
    display: flex;
    align-items: center;
  }

  .name {
    margin-right: 10px;
    font-weight: bold;
    font-size: 14px;
    color: white;
  }

  @for $i from 1 through 9 {
    .sub-button:nth-child(#{$i}) {
      animation-delay: 50ms * ($i - 1) !important;
    }
  }
</style>
