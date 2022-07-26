<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import type { Pokemon } from 'pokenode-ts';
  import PokeIcon from '@/components/PokeIcon/index.svelte';
  import TypeLogo from '@/components/TypeLogo/index.svelte';
  import SelectedArrow from '@/components/SelectedArrow.svelte';
  import { fetchPokemonByUrl, type TFormData } from '../fetch';
  import TitleTag from './TitleTag.svelte';

  export let no: string | number | null = null;
  export let form: string | undefined = undefined;
  export let forms: TFormData[] = [];

  let formDetailPromise: Promise<Pokemon> | null = null;

  $: {
    const item = forms.find((item) => item.form === form || (!form && item.form === '$'));
    if (item && item.url) {
      formDetailPromise = null;
      setTimeout(() => {
        handleFetchFormDetail(item);
      }, 200);
    }
  }

  /**
   * 请求 pokemon-specis 后
   * 获取 pokemon 具体信息
   */

  function handleFetchFormDetail(data: TFormData) {
    formDetailPromise = fetchPokemonByUrl(data.url);
  }
</script>

<div class="icons" transition:fly={{ duration: 100, x: -100 }}>
  {#each forms || [] as item (item.form)}
    <SelectedArrow bind:group={form} value={item.form === '$' ? undefined : item.form}>
      <PokeIcon {no} form={item.form === '$' ? undefined : item.form} />
    </SelectedArrow>
  {/each}
</div>

{#await formDetailPromise then info}
  {#if info}
    <div in:fade={{ duration: 100 }} class="form-detail">
      <div class="block-title battle">
        <TitleTag>属性关系</TitleTag>
        <div class="types">
          {#each info.types || [] as type}
            <TypeLogo name={type.type.name} />
          {/each}
        </div>
      </div>

      <div class="block-title available">
        <TitleTag>获得方式</TitleTag>
        <slot name="available" />
      </div>

      <div class="block-title evo-chain">
        <TitleTag>进化链</TitleTag>
      </div>
    </div>
  {/if}
{/await}

<style lang="scss">
  .form-detail {
    padding-top: 20px;
  }

  .types {
    display: flex;
    justify-content: center;
    column-gap: 8px;
  }

  .block-title {
    margin-top: 24px;
  }

  .icons {
    margin-top: -24px;
    margin-bottom: -38px;
  }
</style>
