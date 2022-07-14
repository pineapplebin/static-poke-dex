<script lang="ts">
  import { assets } from '$app/paths';
  import { createEventDispatcher } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import type { Pokemon } from 'pokenode-ts';

  import CircularProgress from '@smui/circular-progress';
  import PopupView from '@/components/PopupView/index.svelte';
  import TypeLogo from '@/components/TypeLogo/index.svelte';
  import PokeIcon from '@/components/PokeIcon/index.svelte';
  import FormDetail from './components/FormDetail.svelte';

  import { normalizeStyle } from '@/utils/styles';
  import {
    fetchDetailData,
    fetchPokemonByUrl,
    type TFetchDetailDataRes,
    type TFormData
  } from './fetch';
  import { fillNo } from '@/utils/functional';

  const dispatch = createEventDispatcher<{ close: never }>();

  export let no: string | number | null = null;
  export let form: string | undefined = undefined;

  let open = false;
  let promise: Promise<TFetchDetailDataRes> | null = null;

  $: {
    if (no) {
      const _no = fillNo(no);
      open = true;
      promise = fetchDetailData(_no);
    }
  }
  function handleClose() {
    promise = null;
    transition = false;
    imageSlug = '';
    formDetailPromise = null;
    dispatch('close');
    form = undefined;
  }
  let transition = false;

  /**
   * 请求 pokemon-specis 后
   * 获取 pokemon 具体信息
   */

  let imageSlug: string = '';
  $: {
    if (no) {
      const _no = fillNo(no);
      imageSlug = form ? `${_no}-${form}` : _no;
    }
  }
  let formDetailPromise: Promise<Pokemon> | null = null;
  function handleFetchFormDetail(data: TFormData) {
    formDetailPromise = null;
    form = data.form === '$' ? undefined : data.form;
    formDetailPromise = fetchPokemonByUrl(data.url);
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
      {@const data = value?.static}
      <div class="background-red" class:transition><div /></div>
      <div class="background-name" class:transition>
        <span>No.{no}</span>
        <span>{data?.name.chs}</span>
      </div>
      <img
        class="sprite"
        class:transition
        src={imageSlug ? `${assets}/sprites/${imageSlug}.png` : undefined}
        alt="sprite"
        on:load={() => setTimeout(() => (transition = true), 300)}
        on:error={() => (imageSlug = fillNo(no || ''))}
      />
      {#if transition}
        {@const forms = value?.forms}
        <FormDetail {forms} {no} bind:form />
      {/if}
      <!-- <pre style="word-break: break-all; white-space: normal;">{JSON.stringify(info)}</pre> -->
    {:catch err}
      <p>{'' + err}</p>
    {/await}
  </div>
</PopupView>

<style lang="scss">
  @import '../../../utils/style-sheet';

  .detail {
    position: relative;
    text-align: center;
  }

  .sprite {
    display: inline-block;
    max-height: 150px;

    &.transition {
      transition: transform 0.1s ease-in-out;
      transform: translateX(80%);
    }
  }

  .background-red {
    $height: 80px;

    position: absolute;
    top: 20px;
    left: 0;
    width: 75%;
    height: $height;
    background: #c32835;
    transform: translateX(calc(-100% - ($height / 2)));

    @include parallelogram-tail($height, #c32825);

    > div {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 70%;
      background: #e4303d;

      @include parallelogram-tail($height, #e4303d);
    }
  }

  .background-name {
    $height: 30px;

    position: absolute;
    top: 80px;
    right: 0;
    width: 80%;
    height: $height;
    background: black;
    transform: translateX(calc(100% + ($height / 2)));
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-left: 10px;
    color: white;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);

    @include parallelogram-head($height, black);
  }

  .background-red.transition,
  .background-name.transition {
    transition: transform 0.1s ease-in-out;
    transform: translateX(0);
  }
</style>
