<script lang="ts">
  import 'normalize.css';

  import G7Data from '../data/gen-7.json';
  import G72Data from '../data/gen-7-2.json';
  import G8Data from '../data/gen-8.json';

  import PokeTable from '../components/PokeTable.svelte';

  const genData = [
    { title: 'Generation 7', data: [G7Data, G72Data] },
    { title: 'Generation 8', data: [G8Data] }
  ];
</script>

<h2>List of Pokemon by availability</h2>

{#each genData as gen}
  {#if gen.title}
    <h3 id={gen.title.replace(/\s/g, '_')}>{gen.title}</h3>
  {/if}
  {#each gen.data as table}
    <PokeTable head={table.head} data={table.body} />
  {/each}
{/each}

<style>
  h3 {
    z-index: 10;
    position: sticky;
    top: 0;
    margin: 10px 0;
    background: white;
  }
</style>
