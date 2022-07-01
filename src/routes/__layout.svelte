<slot />

<style lang="scss" global>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  @mixin gen($gen, $game, $color) {
    .#{$gen}-#{$game} {
      color: $color;
    }
    .#{$gen}-#{$game}-solid {
      background: $color !important;
    }
  }

  // gen 1: r / g / b / y
  // gen 2: g / s / c
  // gen 3: r / s / fr / lg / e
  // gen 4: d / p / pt / hg / ss
  // gen 5: b / w / b2 / w2
  // gen 6: x / y / or / as
  // gen 7: s / m / us / um / lp / le
  // gen 8: sw / sh / bd / sp / la

  /* gen 1 */
  @include gen('I', 'r', #ff1111);
  @include gen('I', 'g', #11bb11);
  @include gen('I', 'b', #1111ff);
  @include gen('I', 'y', #ffd733);

  /* gen 2 */
  @include gen('II', 'g', #daa520);
  @include gen('II', 's', #c0c0c0);
  @include gen('II', 'c', #4fd9ff);

  /* gen 3 */
  @include gen('III', 'r', #a00000);
  @include gen('III', 's', #0000a0);
  @include gen('III', 'fr', #ff7327);
  @include gen('III', 'lg', #00dd00);
  @include gen('III', 'e', #00a000);

  /* gen 4 */
  @include gen('IV', 'd', #aaaaff);
  @include gen('IV', 'p', #ffaaaa);
  @include gen('IV', 'pt', #999999);
  @include gen('IV', 'hg', #b69e00);
  @include gen('IV', 'ss', #c0c0e1);

  /* gen 5 */
  @include gen('V', 'b', #444444);
  @include gen('V', 'w', #e1e1e1);
  @include gen('V', 'b2', #424b50);
  @include gen('V', 'w2', #e3ced0);

  /* gen 6 */
  @include gen('VI', 'x', #025da6);
  @include gen('VI', 'y', #ea1a3e);
  @include gen('VI', 'or', #ab2813);
  @include gen('VI', 'as', #26649c);

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

  body.mask {
    overflow: hidden;
  }
</style>
