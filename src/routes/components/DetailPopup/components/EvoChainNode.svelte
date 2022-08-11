<script lang="ts">
  import PokeIcon from '@/components/PokeIcon/index.svelte';
  import PokeItem from '@/components/PokeItem.svelte';
  import { normalizeStyle } from '@/utils/styles';
  import type { TEvoGraphNode } from './EvoChainUtils';

  export let node: TEvoGraphNode;
</script>

<div class="node-holder">
  <div class="detail">
    {#if node.detail}
      {@const detail = node.detail}
      <div class="line">
        {#if detail.gender}
          <div class="gender g-{detail.gender}">
            {detail.gender === 2 ? '♂' : '♀'}
          </div>
        {/if}
        <div>
          {#if detail.trigger.name === 'level-up' && detail.min_level}
            <div>Lv.{detail.min_level}</div>
          {/if}
          {#if detail.trigger.name === 'level-up' && detail.min_happiness}
            <div>友好度</div>
          {/if}
          {#if detail.item || detail.held_item}
            <div style={normalizeStyle({ display: 'flex', alignItems: 'center' })}>
              <div>{detail.trigger.name === 'use-item' ? '使用' : '携带'}</div>
              <PokeItem resource={detail.item || detail.held_item} />
            </div>
          {/if}
        </div>
        {#if detail.trigger.name === 'trade'}
          <div>Tr</div>
        {/if}
      </div>
    {/if}
    <div class="icon">
      <PokeIcon no={node.node.no} form={node.node.form} />
    </div>
  </div>
  {#if node.next}
    <div>
      {#each node.next as sub}
        <svelte:self node={sub} />
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .node-holder {
    display: flex;
    align-items: center;
  }

  .detail {
    display: flex;
    align-items: flex-end;
  }

  .line {
    $c: #333;

    position: relative;
    width: 70px;
    border-bottom: 2px dashed $c;
    font-size: 12px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      content: '';
      width: 0;
      height: 0;
      border-right: 4px solid $c;
      border-bottom: 4px solid $c;
      border-top: 4px solid transparent;
      border-left: 4px solid transparent;
      transform: rotate(-45deg) translate(-2px, 5px);
    }
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 58px;
    height: 48px;
  }

  .gender {
    font-family: monospace;
    font-weight: bold;

    &.g-2 {
      color: #005ce6;
    }

    &.g-1 {
      color: #e44781;
    }
  }
</style>
