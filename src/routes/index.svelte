<script lang="ts">
  import 'normalize.css';

  import TabBar from '@smui/tab-bar';
  import Tab, { Label } from '@smui/tab';
  import AvailableDescDialog from '../components/AvailableDescDialog/index.svelte';
  import IndexTable from './components/IndexTable/index.svelte';

  import { memoryData } from '../shared/memoryData';

  let tabs = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  let openDialog = false;
</script>

<div class="tabs">
  <TabBar {tabs} let:tab bind:active={$memoryData.currentTab}>
    <Tab {tab}>
      <Label>Gen {tab}</Label>
    </Tab>
  </TabBar>
</div>

<div class="container">
  <IndexTable generation={$memoryData.currentTab} on:check={() => (openDialog = true)} />
</div>

<AvailableDescDialog bind:open={openDialog} />

<style>
  .tabs {
    position: sticky;
    top: 0;
    z-index: 2;
    background: white;
    box-shadow: 5px 0 5px 5px #ccc;
  }

  .container {
    padding: 10px;
  }
</style>
