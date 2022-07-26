<div class="title">
  <slot />
</div>

<style lang="scss">
  @import '../../../../utils/style-sheet';

  $c: black;
  $h: 24px;

  .title {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    font-size: 14px;
    color: white;
    margin: 14px auto;
    height: $h;
    background: $c;
    border-radius: calc($h / 2);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
  }
</style>
