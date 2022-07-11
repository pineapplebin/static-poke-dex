<script lang="ts">
  export let level: 'primary' | 'secondary' = 'primary';
</script>

<div class="ui-round-button {level}" on:click>
  <slot />
</div>

<style>
  .ui-round-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    background-color: black;
    color: white;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
      0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  .secondary {
    width: 40px;
    height: 40px;
    background-color: white;
  }
</style>
