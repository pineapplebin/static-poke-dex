<script lang="ts">
  import type { PokemonType } from 'pokenode-ts';
  import TypeLogo from '@/components/TypeLogo/index.svelte';
  import { getPokemonDefenseRelation, type TPokemonDefenseRelation } from '../type-chart-calc';

  export let types: PokemonType[];

  let defense: TPokemonDefenseRelation = { weakness: [], resistance: [] };
  $: {
    defense = getPokemonDefenseRelation(types);
  }
</script>

<div class="chart">
  <div class="block">
    <div class="title">弱点</div>
    <div class="content">
      {#each defense.weakness as item}
        <div class="item">
          <TypeLogo name={item.type} on:click />
          {#if item.times !== 2}
            <div class="times">{item.times}</div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
  <div class="block">
    <div class="title">抗性</div>
    <div class="content">
      {#each defense.resistance as item}
        <div class="item">
          <TypeLogo name={item.type} on:click />
          {#if item.times === 0.25}
            <div class="times">
              <sup>1</sup>⁄<sub>4</sub>
            </div>
          {:else if item.times === 0}
            <div class="times">0</div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .chart {
    display: flex;
    padding: 0 4px 4px 4px;
    gap: 4px;
    background-color: #dbdbd9;
  }

  .block {
    width: 50%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }

  .title {
    padding: 4px 0;
    font-size: 14px;
    color: #777;
  }

  .content {
    flex: 1 0 auto;
    background: white;
    padding: 4px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  .item {
    position: relative;

    > .times {
      font-family: monospace;
      font-size: 14px;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      color: #c32835;
      line-height: 0.5;

      &::before {
        content: '×';
        margin: 0 2px;
      }
    }
  }
</style>
