<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { parseRule, type TParsedItem } from './utils';
  import PokeIcon from '@/components/PokeIcon/index.svelte';
  import { magicButtonData } from '@/shared/magicButtonData';
  import { memoryData } from '@/shared/memoryData';

  const dispatch = createEventDispatcher<{ detail: TParsedItem }>();

  export let index: number = -1;
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
    const DELTA = 4;

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
      // 处理选中
      if ($magicButtonData.mode === 'select') {
        const key = `${cell.no}-${cell.form}`;
        $memoryData.selectedPoke[key] = !$memoryData.selectedPoke[key];
      } else {
        dispatch('detail', cell);
      }
    }, 100);
  }
</script>

<div class="container">
  <div class="title">
    <span>{title}</span>
    {#if index > -1}
      <sup>[{index + 1}]</sup>
    {/if}
  </div>

  <div class="box">
    {#each cells as cell, index (index)}
      <div
        animate:flip
        in:scale={{ duration: 80, start: 0.5, opacity: 0.3 }}
        class="box-cell"
        on:click={(e) => {
          e.preventDefault();
          handleDetail(cell);
        }}
      >
        <PokeIcon no={cell.no} form={cell.icon ?? cell.form} />
        {#if $memoryData.selectedPoke[`${cell.no}-${cell.form}`]}
          <div class="temp-mark top-left" />
          <div class="temp-mark top-right" />
          <div class="temp-mark bottom-left" />
          <div class="temp-mark bottom-right" />
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .box {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: 55px;
    grid-gap: 8px 0;
    min-height: 310px;
  }

  .box-cell {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 55px;
    height: 55px;
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
    height: 40px;
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
    gap: 5px;

    > sup {
      font-size: 12px;
    }
  }

  .temp-mark {
    position: absolute;
    width: 25%;
    height: 25%;

    @each $p1 in 'top', 'bottom' {
      @each $p2 in 'left', 'right' {
        &.#{$p1}-#{$p2} {
          border-#{$p1}: 4px solid rgba(36, 127, 17, 0.3);
          border-#{$p2}: 4px solid rgba(36, 127, 17, 0.3);
          border-#{$p1}-#{$p2}-radius: 10px;
          #{$p1}: 0;
          #{$p2}: 0;
        }
      }
    }
  }
</style>
