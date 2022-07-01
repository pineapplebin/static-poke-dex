<script lang="ts">
  import MagicButton, { SubButton } from '../../../components/MagicButton';
  import Dialog, { Title, Content } from '@smui/dialog';

  let openSearchDialog = false;
</script>

<MagicButton>
  <SubButton
    name="过滤"
    icon="search"
    deactiveWhenClick
    on:click={() => (openSearchDialog = true)}
  />
</MagicButton>

<Dialog bind:open={openSearchDialog}>
  <Title>过滤</Title>
</Dialog>
