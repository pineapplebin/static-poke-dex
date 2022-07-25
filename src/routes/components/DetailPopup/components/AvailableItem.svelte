<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import PokeIcon from '@/components/PokeIcon/index.svelte';

  type TIcon = {
    no: number;
    form?: string;
  };

  const dispatch = createEventDispatcher<{ click: { game: string; available: string } }>();

  export let generation: string;
  export let game: string;
  export let available: string;

  let coverIcon: TIcon = { no: 1 };
  $: {
    switch (generation) {
      case 'I':
        if (game === 'r') coverIcon = { no: 6 };
        else if (game === 'g') coverIcon = { no: 3 };
        else if (game === 'b') coverIcon = { no: 9 };
        else if (game === 'y') coverIcon = { no: 25 };
        break;
      case 'II':
        if (game === 'g') coverIcon = { no: 250 };
        else if (game === 's') coverIcon = { no: 249 };
        else if (game === 'c') coverIcon = { no: 245 };
        break;
      case 'III':
        if (game === 'r') coverIcon = { no: 383 };
        else if (game === 's') coverIcon = { no: 382 };
        else if (game === 'fr') coverIcon = { no: 6 };
        else if (game === 'lg') coverIcon = { no: 3 };
        else if (game === 'e') coverIcon = { no: 384 };
        break;
      case 'IV':
        if (game === 'd') coverIcon = { no: 483 };
        else if (game === 'p') coverIcon = { no: 484 };
        else if (game === 'pt') coverIcon = { no: 487 };
        if (game === 'hg') coverIcon = { no: 250 };
        else if (game === 'ss') coverIcon = { no: 249 };
        break;
      case 'V':
        if (game === 'b') coverIcon = { no: 643 };
        else if (game === 'w') coverIcon = { no: 644 };
        if (game === 'b2') coverIcon = { no: 646, form: 'black' };
        else if (game === 'w2') coverIcon = { no: 646, form: 'white' };
        break;
      case 'VI':
        if (game === 'x') coverIcon = { no: 716, form: 'active' };
        else if (game === 'y') coverIcon = { no: 717 };
        if (game === 'or') coverIcon = { no: 383, form: 'primal' };
        else if (game === 'as') coverIcon = { no: 382, form: 'primal' };
        break;
      case 'VII':
        if (game === 's') coverIcon = { no: 791 };
        else if (game === 'm') coverIcon = { no: 792 };
        if (game === 'us') coverIcon = { no: 800, form: 'dusk' };
        else if (game === 'um') coverIcon = { no: 800, form: 'dawn' };
        else if (game === 'lp') coverIcon = { no: 25, form: 'starter' };
        else if (game === 'le') coverIcon = { no: 133, form: 'starter' };
        break;
      case 'VIII':
        if (game === 'sw') coverIcon = { no: 888, form: 'crowned' };
        else if (game === 'sh') coverIcon = { no: 889, form: 'crowned' };
        else if (game === 'bd') coverIcon = { no: 483 };
        else if (game === 'sp') coverIcon = { no: 484 };
        break;
    }
  }
</script>

<div class="item" on:click={() => dispatch('click', { game: `${generation}-${game}`, available })}>
  <div class="icon">
    <div class="icon-holder">
      <PokeIcon {...coverIcon} />
    </div>
  </div>
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
    // filter: drop-shadow(4px 4px 5px rgb(33 33 33 / 10%));
    // border: 1px solid red;

    > .icon,
    > .ava {
      display: flex;
      justify-content: center;
      position: relative;
      width: $w;
      height: $h;
    }

    > .icon {
      $c: #eee;
      align-items: flex-end;
      background-color: $c;
      transform: translateX(calc($h / 2));
      pointer-events: none;
      // z-index: 1;

      @include parallelogram-head($h, $c);
      @include parallelogram-tail($h, $c);
    }

    > .ava {
      align-items: center;
      font-size: 14px;
      font-weight: bold;

      @include parallelogram-head($h);
      @include parallelogram-tail($h);
    }
  }

  .icon-holder {
    margin-bottom: calc(-1 * $h);
    margin-left: -10px;
    transform: scale(0.8);
    opacity: 0.5;
  }
</style>
