<script lang="ts">
  import { fetchEvoChain } from './EvoChainUtils';

  export let url: string | undefined = undefined;
  export let no: string | number | null = null;
  export let form: string | undefined;

  $: {
    if (url) {
      fetchEvoChain({ url, no, form });
    }
  }
</script>

<div />
