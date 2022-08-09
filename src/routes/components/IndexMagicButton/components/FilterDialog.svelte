<script lang="ts">
  import Dialog, { Title, Content } from '@smui/dialog';
  import List, { Item, Graphic, Text } from '@smui/list';
  import Radio from '@smui/radio';
  import { BOX_LIST } from '@/routes/constants/boxes';
  import { memoryData } from '@/shared/memoryData';

  const PAGE_SIZE = 2;

  const OPTIONS: { label: string; value: number }[] = [
    'Kanto',
    'Johto',
    'Hoenn',
    'Sinnoh',
    'Unova',
    'Kalos',
    'Alola',
    'Galar',
    'Hisui'
  ].map((region) => {
    const index = BOX_LIST.findIndex((box) => new RegExp(`\^${region}`).test(box.title));
    return { label: region, value: Math.floor(index / PAGE_SIZE) };
  });

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
