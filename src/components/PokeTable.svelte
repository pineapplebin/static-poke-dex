<script lang="ts">
  import type { TTableHead, TTableRowData } from '../types/availability';
  import { getPokemonInfo } from '../data/struct';

  import PokeIcon from './PokeIcon.svelte';
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
        <th rowspan="2" class="left-border" style="position: sticky; left: 0;">#</th>
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
            <td class="left-border" style="position: sticky; left: 0;">{info.idx}</td>
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
  }

  table {
    table-layout: fixed;
    margin: auto;
    background: #dcdce7;
    // border: 3px solid #88a;
    // border-radius: 10px;
    font-size: 14px;
    border-collapse: separate;
    border-spacing: 0;
    border-top: 3px solid #88a;
    border-right: 3px solid #88a;
    border-bottom: 3px solid #88a;
  }

  .left-border {
    border-left: 3px solid #88a;
  }

  th {
    background: #ccf;
    border: 1px solid #dcdce7;
    color: #3f3f3f;
  }

  tbody > tr {
    > :global(td) {
      box-sizing: border-box;
      background: white;
      border: 1px solid #dcdce7;
    }
  }

  a {
    text-decoration: none;
    color: #0645ad;
    background: none;
  }
</style>
