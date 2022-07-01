<script lang="ts">
  import type { TTableHead, TTableRowData } from '../types/availability';
  import { getPokemonInfo } from '../data/struct';

  import PokeIcon from './PokeIcon/index.svelte';
  import PokeAvailable from './PokeAvailable/index.svelte';

  export let head: TTableHead[] = [];
  export let data: TTableRowData[] = [];

  let colList: number[] = [];
  let tableWidth: number = 0;
  $: {
    const length = head.reduce((acc, item) => (acc += item.span), 0);
    colList = [30, 70, 80, ...new Array(length).fill(0)];
    tableWidth = length * 50 + 180;
  }
</script>

<div class="wrapper">
  <table style="width: {tableWidth}px;">
    <colgroup>
      {#each colList as col}
        <col style="width: {col || 50}px;" />
      {/each}
    </colgroup>
    <thead>
      <tr>
        <th rowspan="2" style="position: sticky; left: 0;">#</th>
        <th rowspan="2" style="position: sticky; left: 30px;">Icon</th>
        <th rowspan="2" style="position: sticky; left: 100px;">Name</th>
        {#each head as h}
          <th colspan={h.span}>Gen {h.name}</th>
        {/each}
      </tr>
      <tr>
        {#each head as h}
          {#each h.games as g}
            <th>
              <span style="font-weight: normal;">{g.toUpperCase()}</span>
            </th>
          {/each}
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as b (b.name + b.form)}
        {@const info = getPokemonInfo(b.no)}
        {#if info}
          <tr>
            <td style="position: sticky; left: 0;">{info.idx}</td>
            <td style="position: sticky; left: 30px;">
              <PokeIcon no={info.idx} form={b.form} />
            </td>
            <td style="position: sticky; left: 100px;">
              <a href="https://wiki.52poke.com/wiki/{info.name.eng}" target="_blank">
                {info.name.chs}
              </a>
            </td>
            {#each head as genData, genIdx}
              {#each b.data[genIdx] as available, gameIndex}
                <PokeAvailable
                  no={b.no}
                  form={b.form}
                  {available}
                  game={genData.games[gameIndex]}
                  generation={genData.name}
                  on:check
                />
              {/each}
            {/each}
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
    overflow-x: auto;
    overflow-y: hidden;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
      0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    margin-bottom: 8px;
  }

  table {
    min-width: 100%;
    table-layout: fixed;
    margin: auto;
    background: #dcdce7;
    // border: 3px solid #88a;
    // border-radius: 10px;
    font-size: 14px;
    border-collapse: separate;
    border-spacing: 0;
    border-color: gray;
  }

  th {
    background: #eeeeee;
    border-right: 1px solid rgba(224, 224, 224, 1);
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    color: #3f3f3f;
    padding: 4px 0;
  }

  tbody > tr {
    > :global(td) {
      box-sizing: border-box;
      background: white;
      border-bottom: 1px solid rgba(224, 224, 224, 1);
    }
  }

  a {
    text-decoration: none;
    color: #0645ad;
    background: none;
  }
</style>
