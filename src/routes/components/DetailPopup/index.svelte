<script lang="ts">
  import PopupView from '../../../components/PopupView/index.svelte';

  export let no: string | null = null;

  let open = false;

  $: {
    if (no) {
      open = true;
    }
  }
</script>

<PopupView bind:open on:close>
  <div>{no}</div>
</PopupView>
