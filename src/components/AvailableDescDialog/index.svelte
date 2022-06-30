<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import { explainAvailable } from './utils';
  import type { ExplainItem } from './utils';
  import { availableDialogData } from '../../shared/availableDialogData';

  export let open: boolean = false;

  let explain: ExplainItem[] = [];
  $: {
    if ($availableDialogData.available) {
      explain = explainAvailable($availableDialogData.available);
    }
  }

  function handleClickJump() {
    console.log($availableDialogData.no);
  }
</script>

<Dialog bind:open>
  <Title>获取分析：{$availableDialogData.available}</Title>
  <Content>
    {#each explain as line}
      <p>{line.char}：{line.desc}</p>
    {/each}
  </Content>
  <Actions>
    <Button on:click={handleClickJump}>
      <Label>查看</Label>
    </Button>
  </Actions>
</Dialog>
