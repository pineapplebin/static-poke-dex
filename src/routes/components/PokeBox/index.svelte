<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import PokeIcon from '@/components/PokeIcon/index.svelte';
  import { parseRule, type TParsedItem } from './utils';

  const dispatch = createEventDispatcher<{ detail: TParsedItem }>();

  export let title: string = '';
  export let rule: string = '';

  let cells: TParsedItem[] = [];
  $: {
    if (rule) {
      cells = parseRule(rule);
    }
  }

  function handleDetail(cell: TParsedItem) {
    setTimeout(() => {
      dispatch('detail', cell);
    }, 100);
  }
</script>

<div class="container">
  <div class="title">{title}</div>

  <div class="box">
    {#each cells as cell}
      <div
        class="box-cell"
        on:click={(e) => {
          e.preventDefault();
          handleDetail(cell);
        }}
      >
        <PokeIcon no={cell.no} form={cell.form} />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px 0;
  }

  .box-cell {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 68px;
    height: 60px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    margin: 0 auto;
    box-shadow: 0 4px 12px 0 rgba(33, 33, 33, 0.1);

    &:active {
      transform: scale(0.9);
      transition: transform 0.1s ease-in-out;
    }
  }

  .title {
    margin: 0 auto;
    width: 60vw;
    height: 48px;
    border-radius: 24px;
    background: white;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;

    font-size: 18px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
