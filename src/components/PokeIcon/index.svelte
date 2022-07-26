<script lang="ts">
  import './pokesprite-pokemon-gen8.css';
  import MAPPING from './mapping.json';
  import { fillNo } from '@/utils/functional';

  export let no: number | string | null | undefined = undefined;
  export let form: string | undefined = undefined;
  export let game: string | undefined = undefined;

  let classList: string = '';
  $: {
    if (no) {
      const list = [];
      const key = fillNo(no) as keyof typeof MAPPING;
      const slug: string | undefined = MAPPING[key];

      if (slug) {
        list.push(slug, slug + (form && form !== 'female' ? `-${form}` : ''));
        if (form === 'female') {
          list.push(form);
        }
      }

      classList = ['pokesprite', 'pokemon', ...list].filter((s) => !!s).join(' ');
    }
  }
</script>

<div>
  {#if no}
    <span class={classList} />
  {/if}
  {#if game}
    <span class="game {game}">{game.split('-')[1].toUpperCase()}</span>
  {/if}
</div>

<style lang="scss">
  div {
    display: inline-block;
    position: relative;
    width: 68px;
    height: 56px;
    user-select: none;
  }

  .game {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    font-weight: bold;
  }
</style>
