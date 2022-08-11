<script lang="ts">
  import EvoChainNode from './EvoChainNode.svelte';
  import { constructEvoGraph, fetchEvoChain, type TEvoGraphNode } from './EvoChainUtils';

  export let url: string | undefined = undefined;
  export let no: string | number | null = null;
  export let form: string | undefined;

  let graph: TEvoGraphNode | null = null;
  $: {
    if (url && no) {
      fetchEvoChain({ url, no, form }).then((data) => {
        const result = constructEvoGraph(data);
        console.log(result);
        graph = result;
      });
    }
  }
</script>

<div class="evo-chain">
  {#if graph}
    <EvoChainNode node={graph} />
  {/if}
</div>

<style>
  .evo-chain {
    display: flex;
    justify-content: center;
  }
</style>
