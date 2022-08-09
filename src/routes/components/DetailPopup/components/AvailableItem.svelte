<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher<{ click: { game: string; available: string } }>();

  export let generation: string;
  export let game: string;
  export let available: string;
</script>

<div class="item" on:click={() => dispatch('click', { game: `${generation}-${game}`, available })}>
  <div class="icon"><span class="game-name">{game.toUpperCase()}</span></div>
  <div class="ava {generation}-{game}-solid">{available}</div>
</div>

<style lang="scss">
  @import '../../../../utils/style-sheet';

  $w: 50px;
  $h: 18px;

  .item {
    flex-shrink: 0;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-end;
    width: calc($w + $h / 2);
    height: calc(2 * $h);

    > .icon,
    > .ava {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: $w;
      height: $h;
    }

    > .icon {
      $c: #eee;
      background-color: $c;
      transform: translateX(calc($h / 2));
      pointer-events: none;

      @include parallelogram-head($h, $c);
      @include parallelogram-tail($h, $c);
    }

    > .ava {
      font-size: 14px;
      font-weight: bold;

      @include parallelogram-head($h);
      @include parallelogram-tail($h);
    }
  }

  .game-name {
    font-size: 12px;
    color: #333;
    font-style: italic;
    margin-right: 8px;
  }
</style>
