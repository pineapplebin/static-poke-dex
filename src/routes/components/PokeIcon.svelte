<script lang='ts'>
  import '../../spritesheet/assets/pokesprite-pokemon-gen8.css';

  import { getPokemonInfo } from '../../data/struct';

  export let no: number | string | undefined = undefined;

  let classList: string = '';
  $: {
    if (no) {
      const list = [];
      const info = getPokemonInfo(no);
      if (info) {
        list.push(info.slug.eng);
      }
      classList = ['pokesprite', 'pokemon', ...list].join(' ');
    }
  }
</script>

{#if no}
  <span class={classList}></span>
{/if}
