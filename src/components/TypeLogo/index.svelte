<script lang="ts">
  import { Types } from 'pokenode-ts';
  import type { TTypeInfo, TTypeNames } from './constants';
  import { TYPES_MAP, TYPES_NAME } from './constants';

  export let type = Types.UNKNOWN;
  export let name: string | null = null;

  let info: TTypeInfo | null = null;
  $: {
    if (type !== Types.UNKNOWN && type !== Types.SHADOW) {
      info = TYPES_MAP[type];
    }
  }

  function getName() {
    return name ? TYPES_NAME[name as TTypeNames] : info?.chs;
  }
</script>

<div class="type">
  <div class="logo-holder {name ?? info?.className}">
    <span class="type-logos {name ?? info?.className}" />
  </div>
  <div class="name">{getName()}</div>
</div>

<style lang="scss">
  @import './type-logos.css';
  @import '../../utils/style-sheet';

  $h: 24px;

  .type {
    position: relative;
    display: inline-flex;
    align-items: center;
    background: #445447;
    color: white;
    font-family: monospace;
    margin-right: calc($h / 2);

    @include parallelogram-tail($h, #445447);
  }

  .name {
    text-align: center;
    width: 40px;
    font-size: 14px;
  }

  .logo-holder {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: $h;

    @include parallelogram-head($h);
  }

  .logo-holder.bug {
    background-color: #90c12c;
    --injectColor: #90c12c;
  }
  .logo-holder.dark {
    background-color: #5a5366;
    --injectColor: #5a5366;
  }
  .logo-holder.dragon {
    background-color: #0a6dc4;
    --injectColor: #0a6dc4;
  }
  .logo-holder.electric {
    background-color: #f3d23b;
    --injectColor: #f3d23b;
  }
  .logo-holder.fairy {
    background-color: #ec8fe6;
    --injectColor: #ec8fe6;
  }
  .logo-holder.fighting {
    background-color: #ce4069;
    --injectColor: #ce4069;
  }
  .logo-holder.fire {
    background-color: #ff9c54;
    --injectColor: #ff9c54;
  }
  .logo-holder.flying {
    background-color: #8fa8dd;
    --injectColor: #8fa8dd;
  }
  .logo-holder.ghost {
    background-color: #5269ac;
    --injectColor: #5269ac;
  }
  .logo-holder.grass {
    background-color: #63bb5b;
    --injectColor: #63bb5b;
  }
  .logo-holder.ground {
    background-color: #d97746;
    --injectColor: #d97746;
  }
  .logo-holder.ice {
    background-color: #74cec0;
    --injectColor: #74cec0;
  }
  .logo-holder.normal {
    background-color: #9099a1;
    --injectColor: #9099a1;
  }
  .logo-holder.poison {
    background-color: #ab6ac8;
    --injectColor: #ab6ac8;
  }
  .logo-holder.psychic {
    background-color: #f97176;
    --injectColor: #f97176;
  }
  .logo-holder.rock {
    background-color: #c7b78b;
    --injectColor: #c7b78b;
  }
  .logo-holder.steel {
    background-color: #5a8ea1;
    --injectColor: #5a8ea1;
  }
  .logo-holder.water {
    background-color: #4d90d5;
    --injectColor: #4d90d5;
  }
</style>
