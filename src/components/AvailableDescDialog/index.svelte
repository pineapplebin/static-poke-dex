<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';

  import { explainAvailable } from './utils';
  import type { ExplainItem } from './utils';
  import { availableDialogData } from '@/shared/availableDialogData';
  import type { TStaticPokemon } from '@/types/base';
  import { fetchStaticPokemon } from '@/data/fetch-static';

  import PokeIcon from '@/components/PokeIcon/index.svelte';

  export let open: boolean = false;

  let explain: ExplainItem[] = [];
  $: {
    if ($availableDialogData.available) {
      explain = explainAvailable($availableDialogData.available);
    }
  }

  let info: TStaticPokemon | null = null;
  $: {
    if ($availableDialogData.pokeInfo.no) {
      fetchStaticPokemon($availableDialogData.pokeInfo.no).then((res) => {
        info = res;
      });
    }
  }

  function handleClickJump() {
    if (info) {
      window.open(
        `https://wiki.52poke.com/wiki/${info.name.jpn}#.E8.8E.B7.E5.BE.97.E6.96.B9.E5.BC.8F`
      );
    }
  }
</script>

<Dialog bind:open>
  <Title>
    <span>获取分析：{$availableDialogData.available}</span>
    <PokeIcon
      no={$availableDialogData.pokeInfo.no}
      form={$availableDialogData.pokeInfo.form}
      game={$availableDialogData.game}
    />
  </Title>
  <Content>
    {#each explain as line}
      <p><strong>{line.char}</strong>：{line.desc}</p>
    {/each}
  </Content>
  <Actions>
    <Button on:click={handleClickJump}>
      <Label>查看</Label>
    </Button>
  </Actions>
</Dialog>

<style>
  p {
    margin-top: 10px;
  }
</style>
