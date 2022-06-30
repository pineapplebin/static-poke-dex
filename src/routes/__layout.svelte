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

  /* gen 6 */
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
</style>
