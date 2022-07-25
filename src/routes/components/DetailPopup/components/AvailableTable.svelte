<script lang="ts">
  import type { TStaticAvailable, TStaticPokemon } from '@/types/base';
  import AvailableItem from './AvailableItem.svelte';

  export let staticInfo: TStaticPokemon | undefined;
  export let form: string | undefined;

  let availableList: TStaticAvailable[] = [];
  $: {
    if (staticInfo) {
      availableList =
        (form && staticInfo.formsAvailable && form in staticInfo.formsAvailable
          ? staticInfo.formsAvailable[form]
          : staticInfo.available) || [];
    } else {
      availableList = [];
    }
  }
</script>

<div class="available-list">
  {#each availableList as gen}
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
  {/each}
</div>

<style>
  .generation {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
  }
</style>
