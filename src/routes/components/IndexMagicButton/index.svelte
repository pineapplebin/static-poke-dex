<script lang="ts">
  import { fly } from 'svelte/transition';
  import MagicButton, { SubButton } from '@/components/MagicButton';
  import FilterDialog from './components/FilterDialog.svelte';
  import { memoryData } from '@/shared/memoryData';
  import { magicButtonData, MODE_NAME } from '@/shared/magicButtonData';

  let openSearchDialog = false;
  let selection: number | null = $memoryData.currentIndex;

  $: {
    if (selection !== null) {
      $memoryData.currentIndex = selection;
      openSearchDialog = false;
    }
  }

  function handleSwitchMode() {
    $magicButtonData.mode === 'select'
      ? ($magicButtonData.mode = 'normal')
      : ($magicButtonData.mode = 'select');
  }
</script>

<MagicButton>
  <SubButton name="选择" icon="check" deactiveWhenClick on:click={handleSwitchMode} />
  <SubButton
    name="过滤"
    icon="search"
    deactiveWhenClick
    on:click={() => (openSearchDialog = true)}
  />
</MagicButton>

<FilterDialog bind:open={openSearchDialog} />

{#if $magicButtonData.mode !== 'normal'}
  <div
    transition:fly={{ x: 200, duration: 100 }}
    class="mode-hint"
    on:click={() => ($memoryData.selectedPoke = {})}
  >
    {MODE_NAME[$magicButtonData.mode]}
  </div>
{/if}

<style lang="scss">
  @import '../../../utils/style-sheet';

  .mode-hint {
    position: fixed;
    z-index: 3;
    top: 10px;
    right: 0;

    $h: 20px;
    $c: #00b454;

    width: 80px;
    height: $h;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    background-color: $c;
    color: white;
    @include parallelogram-head($h, $c);
  }
</style>
