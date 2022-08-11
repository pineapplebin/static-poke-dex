<script lang="ts">
  import type { NamedAPIResource, Item } from 'pokenode-ts';
  import { utilClient } from '@/routes/components/DetailPopup/fetch';

  export let resource: NamedAPIResource | null;

  let promise: Promise<Item>;
  $: {
    if (resource && resource.url) {
      promise = utilClient.getResourceByUrl(resource.url);
    }
  }
</script>

{#await promise}
  <span>{resource?.name}</span>
{:then item}
  <img src={item.sprites.default} alt={item.name} />
{/await}

<style>
  img {
    display: inline-block;
    width: 25px;
    height: 25px;
  }
</style>
