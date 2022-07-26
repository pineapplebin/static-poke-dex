<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  // 组件 props 泛型
  type T = $$Generic;
  interface $$Slots {
    default: {
      group: T;
      value: T;
    };
  }

  export let group: T;
  export let value: T;

  const dispatch = createEventDispatcher<{ click: T }>();

  function handleSelect() {
    group = value;
    dispatch('click', value);
  }
</script>

<div class="box" class:active={group === value} on:click={handleSelect}>
  <slot />
</div>

<style lang="scss">
  .box {
    position: relative;
    display: inline-block;

    &.active {
      &::after {
        position: absolute;
        bottom: -2px;
        left: calc(50% - 6px);
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid black;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        animation: bounce 1.5s infinite;
      }
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(8px);
    }
    60% {
      transform: translateY(4px);
    }
  }
</style>
