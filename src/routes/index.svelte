<script lang="ts">
  import { swipe } from 'svelte-gestures';

  import IndexMagicButton from './components/IndexMagicButton/index.svelte';
  import PokeBox from './components/PokeBox/index.svelte';
  import DetailPopup from './components/DetailPopup/index.svelte';
  import type { TCheckPokemon } from '@/types/base';
  import { BOX_LIST, switchBox } from './constants/boxes';

  let checkDetail: TCheckPokemon | null = null;
  let currentIndex = 0;

  function handleCheckDetail(ev: CustomEvent<TCheckPokemon>) {
    checkDetail = ev.detail;
  }

  function handleSwipe(e: CustomEvent<{ direction: 'left' | 'right' | 'top' | 'bottom' }>) {
    let delta = 0;
    if (e.detail.direction === 'left') {
      delta = 1;
    } else if (e.detail.direction === 'right') {
      delta = -1;
    }
    currentIndex = switchBox(currentIndex, delta);
  }
</script>

<div class="background" />

<div class="content" use:swipe on:swipe={handleSwipe}>
  {#if BOX_LIST[currentIndex]}
    {@const box = BOX_LIST[currentIndex]}
    <PokeBox {...box} on:detail={handleCheckDetail} />
  {/if}
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
    padding: 30px 10px 0 10px;
    min-height: 80vh;

    > :global(div) {
      margin-bottom: 30px;
    }
  }
</style>
