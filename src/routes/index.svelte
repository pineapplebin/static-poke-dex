<script lang="ts">
  import IndexMagicButton from './components/IndexMagicButton/index.svelte';
  import PokeBox from './components/PokeBox/index.svelte';
  import DetailPopup from './components/DetailPopup/index.svelte';
  import type { TCheckPokemon } from '@/types/base';

  let checkDetail: TCheckPokemon | null = null;

  function handleCheckDetail(ev: CustomEvent<TCheckPokemon>) {
    checkDetail = ev.detail;
  }
</script>

<div class="background" />

<div class="content">
  <PokeBox title="关东 1" rule="1-30" on:detail={handleCheckDetail} />
  <PokeBox title="关东 2" rule="31-60" on:detail={handleCheckDetail} />
</div>

<IndexMagicButton />
<DetailPopup {...checkDetail ?? {}} on:close={() => (checkDetail = null)} />

<style lang="scss">
  .background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: linear-gradient(45deg, #f0e2f1 10%, #fff 50%, #ecfffe 90%);
    z-index: 0;
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 20px 10px 0 10px;

    > :global(div) {
      margin-bottom: 30px;
    }
  }
</style>
