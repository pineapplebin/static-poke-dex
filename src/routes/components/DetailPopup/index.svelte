<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { PokemonClient } from 'pokenode-ts';
  import type { Pokemon } from 'pokenode-ts';

  import CircularProgress from '@smui/circular-progress';
  import Button, { Label } from '@smui/button';
  import PopupView from '../../../components/PopupView/index.svelte';
  import PokeIcon from '../../../components/PokeIcon/index.svelte';
  import TypeLogo from '../../../components/TypeLogo/index.svelte';

  import { getPokemonInfo } from '../../../data/struct';
  import type { TPokemonInfo } from '../../../types/base';
  import { normalizeStyle } from '../../../utils/styles';

  const dispatch = createEventDispatcher<{ close: never }>();

  export let no: string | null = null;

  let open = false;
  let info: TPokemonInfo | null = null;

  const client = new PokemonClient();
  let promise: Promise<Pokemon> | null = null;

  $: {
    if (no) {
      open = true;
      info = getPokemonInfo(no);
      promise = client.getPokemonById(+no);
    }
  }

  function handleClose() {
    dispatch('close');
    info = null;
    promise = null;
  }
</script>

<PopupView bind:open on:close={handleClose}>
  <div class="detail">
    {#await promise}
      <div style={normalizeStyle({ display: 'flex', justifyContent: 'center', padding: '12px 0' })}>
        <CircularProgress style="width: 36px; height: 36px;" indeterminate />
      </div>
    {:then value}
      <img class="sprite" src={value?.sprites.front_default} alt="sprite" />
      <div class="name">No. {no} {info?.name.chs}</div>
      <div class="types">
        {#each value?.types || [] as type}
          <TypeLogo name={type.type.name} />
        {/each}
      </div>
    {:catch err}
      <PokeIcon {no} />
      <div class="name">No. {no} {info?.name.chs}</div>
      <span style="word-break: break-all;">{'' + err}</span>
    {/await}

    <div class="buttons">
      <Button variant="outlined">
        <Label>
          <a href="https://wiki.52poke.com/wiki/{info?.name.eng}" target="_blank"> 跳转到百科 </a>
        </Label>
      </Button>
    </div>
  </div>
</PopupView>

<style>
  .detail {
    height: 95vh;
    overflow: hidden auto;
    text-align: center;
  }

  .name {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .sprite {
    display: inline-block;
    max-height: 120px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .types {
    display: flex;
    justify-content: center;
    column-gap: 8px;
  }

  .buttons {
    margin: 12px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    column-gap: 10px;
  }
</style>
