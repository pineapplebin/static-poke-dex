<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{ click: never }>();

  export let level: 'primary' | 'secondary' = 'primary';

  function handleClick() {
    setTimeout(() => {
      dispatch('click');
    }, 100);
  }
</script>

<div class="ui-round-button {level}" on:click={handleClick}>
  <slot />
</div>

<style lang="scss">
  .ui-round-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    background-color: black;
    color: white;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);

    &:active {
      transform: scale(0.9);
      transition: transform 0.1s ease-in-out;
    }
  }

  .secondary {
    width: 40px;
    height: 40px;
    background-color: white;
  }
</style>
