<script lang="ts">
  import 'normalize.css';

  import G1Data from '../data/gen-1.json';
  import G2Data from '../data/gen-2.json';
  import G3Data from '../data/gen-3.json';
  import G4Data from '../data/gen-4.json';
  import G5Data from '../data/gen-5.json';
  import G6Data from '../data/gen-6.json';
  import G7Data from '../data/gen-7.json';
  import G72Data from '../data/gen-7-2.json';
  import G8Data from '../data/gen-8.json';

  import PokeTable from '../components/PokeTable.svelte';
  import AvailableDescDialog from '../components/AvailableDescDialog/index.svelte';

  const genData = [
    { title: 'Generation 1', data: [G1Data] },
    { title: 'Generation 2', data: [G2Data] },
    { title: 'Generation 3', data: [G3Data] },
    { title: 'Generation 4', data: [G4Data] },
    { title: 'Generation 5', data: [G5Data] },
    { title: 'Generation 6', data: [G6Data] },
    { title: 'Generation 7', data: [G7Data, G72Data] },
    { title: 'Generation 8', data: [G8Data] }
  ];

  let openDialog = false;
</script>

<h2>List of Pokemon by availability</h2>

{#each genData as gen}
  {#if gen.title}
    <h3 id={gen.title.replace(/\s/g, '_')}>{gen.title}</h3>
  {/if}
  {#each gen.data as table}
    <PokeTable head={table.head} data={table.body} on:check={() => (openDialog = true)} />
  {/each}
{/each}

<AvailableDescDialog bind:open={openDialog} />

<style>
  h3 {
    z-index: 2;
    position: sticky;
    top: 0;
    padding: 10px 0;
    background: white;
  }
</style>
