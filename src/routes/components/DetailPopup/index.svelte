<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import CircularProgress from '@smui/circular-progress';
  import PopupView from '@/components/PopupView/index.svelte';
  import TypeLogo from '@/components/TypeLogo/index.svelte';
  import { normalizeStyle } from '@/utils/styles';
  import { fetchDetailData, type TFetchDetailDataRes } from './fetch';

  const dispatch = createEventDispatcher<{ close: never }>();

  export let no: string | number | null = null;
  export let form: string | undefined = undefined;

  let open = false;

  let promise: Promise<TFetchDetailDataRes> | null = null;

  $: {
    if (no) {
      open = true;
      promise = fetchDetailData({ no, form });
    }
  }

  function handleClose() {
    dispatch('close');
    promise = null;
  }
</script>

<PopupView bind:open on:close={handleClose}>
  <div class="detail">
    {#await promise}
      <div
        style={normalizeStyle({
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          padding: '12px 0'
        })}
      >
        <CircularProgress style="width: 36px; height: 36px;" indeterminate />
      </div>
    {:then value}
      {@const info = value?.info}
      {@const data = value?.static}
      <img class="sprite" src={info?.sprites.front_default} alt="sprite" />
      <div class="name">
        <span>No.{no}</span>
        <span>{data?.name.chs}</span>
      </div>
      <div class="types">
        {#each info?.types || [] as type}
          <TypeLogo name={type.type.name} />
        {/each}
      </div>
    {:catch err}
      <p>{'' + err}</p>
    {/await}
  </div>
</PopupView>

<style>
  .detail {
    height: 95vh;
    overflow: hidden auto;
    text-align: center;
  }

  .name {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .sprite {
    display: inline-block;
    max-height: 120px;
  }

  .types {
    display: flex;
    justify-content: center;
    column-gap: 8px;
  }
</style>
