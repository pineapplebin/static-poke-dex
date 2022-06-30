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
