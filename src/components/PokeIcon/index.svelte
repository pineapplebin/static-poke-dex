<script lang="ts">
  import './pokesprite-pokemon-gen8.css';
  import MAPPING from './mapping.json';

  export let no: number | string | null | undefined = undefined;
  export let form: string | undefined = undefined;
  export let game: string | undefined = undefined;

  let classList: string = '';
  $: {
    if (no) {
      const list = [];
      const key = ('' + no).padStart(3, '0') as keyof typeof MAPPING;
      const slug: string | undefined = MAPPING[key];

      if (slug) {
        list.push(slug + (form && form !== 'female' ? `-${form}` : ''));
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
  }

  .game {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
    font-weight: bold;
  }
</style>
