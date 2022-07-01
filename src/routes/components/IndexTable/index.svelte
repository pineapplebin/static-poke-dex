<script lang="ts">
  import { dynamicImportData } from './dynamic';
  import CircularProgress from '@smui/circular-progress';
  import PokeTable from '../../../components/PokeTable.svelte';

  export let generation: string = '';

  let request = dynamicImportData(generation);
  $: {
    if (generation) {
      request = dynamicImportData(generation);
    }
  }
</script>

{#await request}
  <CircularProgress style="width: 36px; height: 36px;" indeterminate />
{:then data}
  {#each data as table}
    <PokeTable head={table.head} data={table.body} on:check />
  {/each}
{/await}
