<script lang="ts">
  import { onMount } from 'svelte';
  import type { Properties } from 'csstype';
  import { normalizeStyle } from '@/utils/styles';

  export let delay: number = 0;
  export let transition: Properties = {};

  let addClass = false;

  onMount(() => {
    if (delay) {
      setTimeout(() => {
        addClass = true;
      }, delay);
    }
  });
</script>

<div class="translate-helper" style={addClass ? normalizeStyle(transition) : undefined}>
  <slot {addClass} />
</div>

<style>
  .translate-helper {
    display: inline-block;
    transition: transform 0.3s ease-in-out;
  }
</style>
