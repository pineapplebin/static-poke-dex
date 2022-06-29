<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import { explainAvailable } from './utils';
  import type { ExplainItem } from './utils';

  export let currentAvailable: string = '';
  export let open: boolean = false;

  let explain: ExplainItem[] = [];
  $: {
    if (currentAvailable) {
      explain = explainAvailable(currentAvailable);
    }
  }
</script>

<Dialog bind:open>
  <Title>获取分析：{currentAvailable}</Title>
  <Content>
    {#each explain as line}
      <p>{line.char}：{line.desc}</p>
    {/each}
  </Content>
  <Actions>
    <Button>
      <Label>查看</Label>
    </Button>
  </Actions>
</Dialog>
