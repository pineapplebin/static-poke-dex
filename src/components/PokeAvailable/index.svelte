<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { checkIsSolid } from './utils';
  import { availableDialogData } from '../../shared/availableDialogData';
  import type { TAvailableDialogData } from '../../shared/availableDialogData';

  const dispatcher = createEventDispatcher<{ check: TAvailableDialogData }>();

  export let no: string = '';
  export let form: string | undefined = undefined;
  export let generation: string = '';
  export let game: string = '';
  export let available: string = '';

  interface TComputedAvailable {
    gen: string;
    game: string;
    solid: boolean;
  }

  // gen 1: r / g / b / y
  // gen 2: g / s / c
  // gen 3: r / s / fr / lg / e
  // gen 4: d / p / pt / hg / ss
  // gen 5: b / w / b2 / w2
  // gen 6: x / y / or / as
  // gen 7: s / m / us / um / lp / le
  // gen 8: sw / sh / bd / sp / la

  let cAvailable: TComputedAvailable | null = null;
  $: {
    if (generation && available && game) {
      cAvailable = {
        gen: generation,
        game: game,
        solid: checkIsSolid(available)
      };
    }
  }

  function handleCheck() {
    if (available && no) {
      const data = { pokeInfo: { no, form }, available, game: `${generation}-${game}` };
      $availableDialogData = data;
      dispatcher('check', data);
    }
  }
</script>

{#if cAvailable}
  {@const clz = `${cAvailable.gen}-${cAvailable.game}${cAvailable.solid ? '-solid' : ''}`}
  <td class={clz} on:click={handleCheck}>
    {available}
  </td>
{:else}
  <td class="invalid">△</td>
{/if}

<style>
  td {
    padding: 0 4px;
    text-align: center;
    font-weight: bold;
  }

  .invalid {
    color: #ff8f8f;
  }
</style>
