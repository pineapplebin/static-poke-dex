<script lang="ts">
  import IndexMagicButton from './components/IndexMagicButton/index.svelte';
  import PokeBox from './components/PokeBox/index.svelte';
  import DetailPopup from './components/DetailPopup/index.svelte';

  let detailNo: string | number | null = null;
</script>

<div class="background" />

<div class="content">
  <PokeBox title="关东 1" rule="1-30" on:detail={(ev) => (detailNo = ev.detail.no)} />
</div>

<IndexMagicButton />
<DetailPopup no={detailNo} on:close={() => (detailNo = null)} />

<style>
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
    padding-top: 20px;
  }
</style>
