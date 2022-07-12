<script lang="ts">
  import Dialog, { Title, Content } from '@smui/dialog';
  import List, { Item, Graphic, Text } from '@smui/list';
  import Radio from '@smui/radio';
  import { BOX_LIST } from '@/routes/constants/boxes';
  import { memoryData } from '@/shared/memoryData';

  const OPTIONS: { label: string; value: number }[] = BOX_LIST.map((item, idx) => ({
    label: item.title,
    value: idx
  })).reduce((acc, item) => {
    const last = acc[acc.length - 1];
    if (last) {
      const parts = last.label.split(' ');
      if (!new RegExp(`^${parts[0]}`).test(item.label)) {
        acc.push(item);
      }
    } else {
      acc.push(item);
    }
    return acc;
  }, [] as any);

  export let open = false;
  let selection: number | null = $memoryData.currentIndex;

  $: {
    if (selection !== null) {
      $memoryData.currentIndex = selection;
      open = false;
    }
  }
</script>

<Dialog selection bind:open>
  <Title>快速跳转</Title>
  <Content style="width: 80vw;">
    <List radioList>
      {#each OPTIONS as opt}
        <Item>
          <Graphic>
            <Radio bind:group={selection} value={opt.value} />
          </Graphic>
          <Text>{opt.label}</Text>
        </Item>
      {/each}
    </List>
  </Content>
</Dialog>
