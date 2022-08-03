<script lang="ts">
  import { buildSvgString } from './math';
  const SIZE = 100;

  export let stats: number[] = [45, 49, 49, 65, 65, 45];
  let svg = '';

  $: {
    svg = buildSvgString(SIZE, stats);
  }
</script>

<div class="container">
  {@html svg}
  <div class="text hp">
    HP<span>{stats[0]}</span>
  </div>
  <div class="text attack">攻击<span>{stats[1]}</span></div>
  <div class="text defense">防御<span>{stats[2]}</span></div>
  <div class="text s-attack">特攻<span>{stats[3]}</span></div>
  <div class="text s-defense">特防<span>{stats[4]}</span></div>
  <div class="text speed">速度<span>{stats[5]}</span></div>
  <div class="text total">{stats.reduce((acc, n) => acc + n)}</div>
</div>

<style lang="scss">
  .container {
    display: inline-block;
    position: relative;
    padding: 40px 0 26px 0;
  }

  .text {
    position: absolute;
    transform: translateX(-50%);
    font-size: 14px;
    color: #aaa;
    word-break: keep-all;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;

    > span {
      color: #333;
      font-family: monospace;
    }

    &.hp {
      top: 0;
      left: 50%;
    }

    &.attack {
      top: 24%;
      left: -20px;
    }

    &.defense {
      top: 24%;
      left: calc(100% + 20px);
    }

    &.s-attack {
      top: 65%;
      left: -20px;
    }

    &.s-defense {
      top: 65%;
      left: calc(100% + 20px);
    }

    &.speed {
      bottom: -10px;
      left: 50%;
    }

    &.total {
      font-family: monospace;
      top: 50%;
      left: 50%;
      color: white;
      transform: translate(-50%, -50%);
    }
  }
</style>
