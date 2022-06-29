<script lang="ts">
  import '../spritesheet/assets/pokesprite-pokemon-gen8.css';
  import { getPokemonInfo } from '../data/struct';

  export let no: number | string | undefined = undefined;
  export let form: string | undefined = undefined;

  let classList: string = '';
  $: {
    if (no) {
      const list = [];
      const info = getPokemonInfo(no);
      if (info) {
        list.push(info.slug.eng + (form ? `-${form}` : ''));
      }
      classList = ['pokesprite', 'pokemon', ...list].filter((s) => !!s).join(' ');
    }
  }
</script>

{#if no}
  <span class={classList} />
{/if}
