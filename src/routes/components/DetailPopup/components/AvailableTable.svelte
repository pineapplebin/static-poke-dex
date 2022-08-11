<script lang="ts">
  import type { TStaticAvailable, TStaticPokemon } from '@/types/base';
  import SelectedArrow from '@/components/SelectedArrow.svelte';
  import AvailableItem from './AvailableItem.svelte';

  export let staticInfo: TStaticPokemon | undefined;
  export let form: string | undefined;

  let checkIndex = 0;
  let availableList: TStaticAvailable[] = [];
  $: {
    if (staticInfo) {
      const list =
        (form && staticInfo.formsAvailable && form in staticInfo.formsAvailable
          ? staticInfo.formsAvailable[form]
          : staticInfo.available) || [];
      availableList = list.slice().reverse();
    } else {
      availableList = [];
    }
  }
</script>

<div class="available-list">
  <div class="gen-select-list">
    {#each availableList as gen, index}
      <SelectedArrow bind:group={checkIndex} value={index}>
        <div class="gen-select">{gen.generation}</div>
      </SelectedArrow>
    {/each}
  </div>

  {#if availableList[checkIndex]}
    {@const gen = availableList[checkIndex]}
    <div class="generation">
      {#each gen.games as game, index}
        <AvailableItem
          generation={gen.generation}
          {game}
          available={gen.available[index]}
          on:click
        />
      {/each}
    </div>
  {/if}
</div>

<style>
  .generation {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }

  .gen-select-list {
    margin-bottom: 10px;
    font-family: monospace;
  }

  .gen-select {
    width: 40px;
    text-align: center;
    line-height: 1.5;
  }
</style>
