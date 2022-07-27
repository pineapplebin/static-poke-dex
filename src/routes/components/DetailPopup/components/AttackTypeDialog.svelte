<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import { TYPES_ID_MAP, TYPES_NAME, type TTypeNames } from '@/components/TypeLogo/constants';
  import TypeLogo from '@/components/TypeLogo/index.svelte';
  import { ATTACK_RELATION_MAP, type TRelationItem } from '../type-chart-calc';

  export let type: TTypeNames | null;
  export let open = false;

  let good: TRelationItem[] = [];
  let bad: TRelationItem[] = [];
  $: {
    if (type) {
      const result = ATTACK_RELATION_MAP[TYPES_ID_MAP[type]];
      [good, bad] = result.reduce(
        (acc, item) => {
          if (item.times > 1) {
            acc[0].push(item);
          } else {
            acc[1].push(item);
          }
          return acc;
        },
        [[], []] as [TRelationItem[], TRelationItem[]]
      );
    }
  }
</script>

<Dialog bind:open>
  {#if type}
    <Title>
      <span>攻击方属性：{TYPES_NAME[type]}</span>
    </Title>
    <Content>
      {#each [good, bad] as list}
        <div class="list">
          {#each list as item}
            <div class="item">
              <TypeLogo type={item.type} />
              {#if item.times < 1 && item.times > 0}
                <div class="times">
                  <sup>1</sup>⁄<sub>{+(1 / item.times).toPrecision(10)}</sub>
                </div>
              {:else}
                <div class="times">{item.times}</div>
              {/if}
            </div>
          {/each}
        </div>
      {/each}
    </Content>
  {/if}
  <Actions>
    <Button><Label>关闭</Label></Button>
  </Actions>
</Dialog>

<style lang="scss">
  .list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding-top: 4px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: -20px;
    }
  }

  .item {
    position: relative;

    > .times {
      font-family: monospace;
      font-size: 14px;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      color: #c32835;
      line-height: 0.5;

      &::before {
        content: '×';
        margin: 0 2px;
      }
    }
  }
</style>
