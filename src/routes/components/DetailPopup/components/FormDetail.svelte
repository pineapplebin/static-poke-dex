<script lang="ts">
  import { fly, fade } from 'svelte/transition';
  import type { Pokemon } from 'pokenode-ts';
  import PokeIcon from '@/components/PokeIcon/index.svelte';
  import TypeLogo from '@/components/TypeLogo/index.svelte';
  import { fetchPokemonByUrl, type TFormData } from '../fetch';

  export let no: string | number | null = null;
  export let form: string | undefined = undefined;
  export let forms: TFormData[] = [];

  $: {
    const item = forms.find((item) => item.form === form || (!form && item.form === '$'));
    if (item) {
      handleFetchFormDetail(item);
    }
  }

  let formDetailPromise: Promise<Pokemon> | null = null;

  function handleFetchFormDetail(data: TFormData) {
    formDetailPromise = null;
    formDetailPromise = fetchPokemonByUrl(data.url);
  }
</script>

<div class="icons" transition:fly={{ duration: 100, x: -100 }}>
  {#each forms || [] as item (item.form)}
    <div
      class="icon-item"
      class:active={(!form && item.form === '$') || form === item.form}
      on:click={() => (form = item.form === '$' ? undefined : item.form)}
    >
      <PokeIcon {no} form={item.form === '$' ? undefined : item.form} />
    </div>
  {/each}
</div>
{#await formDetailPromise then info}
  {#if info}
    <div in:fade={{ duration: 100 }} class="form-detail">
      <div class="types">
        {#each info.types || [] as type}
          <TypeLogo name={type.type.name} />
        {/each}
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

  .icons {
    margin-top: -20px;
  }

  .icon-item {
    position: relative;
    display: inline-block;

    &.active {
      &::after {
        position: absolute;
        bottom: 0;
        left: 40%;
        content: '';
        display: block;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid black;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        animation: bounce 1.5s infinite;
      }
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(10px);
    }
    60% {
      transform: translateY(5px);
    }
  }
</style>
