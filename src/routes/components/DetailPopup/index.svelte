<script lang="ts">
  import PopupView from '../../../components/PopupView/index.svelte';
  import PokeIcon from '../../../components/PokeIcon/index.svelte';
  import { getPokemonInfo } from '../../../data/struct';
  import type { TPokemonInfo } from '../../../types/base';

  export let no: string | null = null;

  let open = false;
  let info: TPokemonInfo | null = null;

  $: {
    if (no) {
      open = true;
      info = getPokemonInfo(no);
    }
  }
</script>

<PopupView bind:open on:close>
  <div class="detail">
    <PokeIcon {no} />
    <div class="name">No. {no} {info?.name.chs}</div>
  </div>
</PopupView>

<style>
  .detail {
    padding: 15px;
    height: 100%;
    overflow: hidden auto;
    text-align: center;
  }

  .name {
    font-weight: bold;
    font-size: 18px;
    margin: 12px 0;
  }
</style>
