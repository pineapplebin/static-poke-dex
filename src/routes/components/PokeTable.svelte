<script lang="ts">
  import type { TTableHead, TTableRowData } from '../../types/availability';
  import { getPokemonInfo } from '../../data/struct';

  import PokeIcon from './PokeIcon.svelte';
  import PokeAvailable from './PokeAvailable.svelte';

  export let title: string = '';
  export let head: TTableHead[] = [];
  export let data: TTableRowData[] = [];
</script>

<h3 id={title.replace(/\s/g, '_')}>{title}</h3>

<div class="wrapper">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Icon</th>
        <th>Name</th>
        {#each head as h}
          <th colspan={h.span}>Gen {h.name}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as b}
        {@const info = getPokemonInfo(b.no)}
        {#if info}
          <tr>
            <td>{info.idx}</td>
            <td>
              <PokeIcon no={info.idx} />
            </td>
            <td>
              <a href="https://wiki.52poke.com/wiki/{info.name.eng}" target="_blank">
                {info.name.chs}
              </a>
            </td>
            {#each head as genData, genIdx}
              {#each b.data[genIdx] as available, gameIndex}
                <PokeAvailable
                  {available}
                  game={genData.games[gameIndex]}
                  generation={genData.name}
                />
              {/each}
            {/each}
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<style>
  .wrapper {
    overflow-x: auto;
    overflow-y: hidden;
  }

  h3 {
    position: sticky;
    top: 0;
    margin: 10px 0;
    background: white;
  }

  table {
    margin: auto;
    background: #dcdce7;
    border: 3px solid #88a;
    border-radius: 10px;
    font-size: 14px;
  }

  th {
    background: #ccf;
  }

  tbody > tr {
    background: white;
  }

  a {
    text-decoration: none;
    color: #0645ad;
    background: none;
    word-break: keep-all;
  }
</style>
