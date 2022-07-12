<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PokeIcon from '@/components/PokeIcon/index.svelte';
  import { parseRule, type TParsedItem } from './utils';

  const dispatch = createEventDispatcher<{ detail: TParsedItem }>();

  export let title: string = '';
  export let rule: string = '';

  let cells: TParsedItem[] = [];
  let cancel: number = 0;
  $: {
    if (rule) {
      cancel += 1;
      cells = [];
      playAnimation(parseRule(rule), 0, cancel);
    }
  }

  function playAnimation(parsed: TParsedItem[], idx: number, cancelId: number): number | undefined {
    if (idx >= parsed.length) {
      return;
    }
    const DELTA = 3;

    return setTimeout(() => {
      if (cancel !== cancelId) {
        return;
      }
      cells.push(...parsed.slice(idx, idx + DELTA));
      cells = cells;
      playAnimation(parsed, idx + DELTA, cancelId);
    }, 50) as any;
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
    {#each cells as cell, index (index)}
      <div
        animate:flip
        in:scale={{ duration: 100, start: 0.5, opacity: 0.3 }}
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
    grid-auto-rows: 60px;
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
    background: black;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;

    font-size: 18px;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
