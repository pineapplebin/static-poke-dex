<script lang="ts">
  export let generation: string = '';
  export let game: string = '';
  export let available: string = '';

  interface TComputedAvailable {
    gen: string;
    game: string;
    solid: boolean;
  }

  // gen 1: r / g / b / y
  // gen 2: g / s / c
  // gen 3: r / s / fr / lg / e
  // gen 4: d / p / pt / hg / ss
  // gen 5: b / w / b2 / w2
  // gen 6: x / y / or / as
  // gen 7: s / m / us / um / lp / le
  // gen 8: sw / sh / bd / sp / la

  function checkIsSolid(available: string): boolean {
    return ['—'].indexOf(available) === -1;
  }

  let cAvailable: TComputedAvailable | null = null;
  $: {
    if (generation && available && game) {
      cAvailable = {
        gen: generation,
        game: game,
        solid: checkIsSolid(available)
      };
    }
  }
</script>

{#if cAvailable}
  {@const clz = `${cAvailable.gen}-${cAvailable.game}${cAvailable.solid ? '-solid' : ''}`}
  <td class={clz}>
    {available}
  </td>
{:else}
  <td class="invalid">△</td>
{/if}

<style lang="scss">
  td {
    padding: 0 4px;
    text-align: center;
    font-weight: bold;
  }

  .invalid {
    color: #ff8f8f;
  }

  @mixin gen($gen, $game, $color) {
    .#{$gen}-#{$game} {
      color: $color;
      background: transparent;
    }
    .#{$gen}-#{$game}-solid {
      background: $color;
    }
  }

  /* gen 8 */
  @include gen('VIII', 'sw', #00a1e9);
  @include gen('VIII', 'sh', #bf004f);
  @include gen('VIII', 'bd', #44bae5);
  @include gen('VIII', 'sp', #da7d99);
  @include gen('VIII', 'la', #36597b);
</style>
