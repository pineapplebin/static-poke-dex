<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { checkIsSolid } from './utils';

  export let generation: string = '';
  export let game: string = '';
  export let available: string = '';

  const dispatcher = createEventDispatcher<{ check: string }>();

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

  function handleCheck() {
    dispatcher('check', available);
  }
</script>

{#if cAvailable}
  {@const clz = `${cAvailable.gen}-${cAvailable.game}${cAvailable.solid ? '-solid' : ''}`}
  <td class={clz} on:click={handleCheck}>
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
      background: white;
    }
    .#{$gen}-#{$game}-solid {
      background: $color !important;
    }
  }

  /* gen 7 */
  @include gen('VII', 's', #f1912b);
  @include gen('VII', 'm', #5599ca);
  @include gen('VII', 'us', #e95b2b);
  @include gen('VII', 'um', #226db5);
  @include gen('VII', 'lp', #f5da26);
  @include gen('VII', 'le', #d4924b);

  /* gen 8 */
  @include gen('VIII', 'sw', #00a1e9);
  @include gen('VIII', 'sh', #bf004f);
  @include gen('VIII', 'bd', #44bae5);
  @include gen('VIII', 'sp', #da7d99);
  @include gen('VIII', 'la', #36597b);
</style>
