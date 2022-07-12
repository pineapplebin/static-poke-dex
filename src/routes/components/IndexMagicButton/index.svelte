<script lang="ts">
  import MagicButton, { SubButton } from '@/components/MagicButton';
  import FilterDialog from './components/FilterDialog.svelte';
  import { memoryData } from '@/shared/memoryData';

  let openSearchDialog = false;
  let selection: number | null = $memoryData.currentIndex;

  $: {
    if (selection !== null) {
      $memoryData.currentIndex = selection;
      openSearchDialog = false;
    }
  }
</script>

<MagicButton>
  <SubButton
    name="过滤"
    icon="search"
    deactiveWhenClick
    on:click={() => (openSearchDialog = true)}
  />
</MagicButton>

<FilterDialog bind:open={openSearchDialog} />
