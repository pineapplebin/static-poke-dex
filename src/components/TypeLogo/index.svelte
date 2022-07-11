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

<style>
  @import './type-logos.css';

  .type {
    display: inline-flex;
    align-items: center;
    border-radius: 6px;
    overflow: hidden;
    font-size: 14px;
    background: #445447;
    color: white;
    font-family: monospace;
  }

  .name {
    text-align: center;
    width: 64px;
  }

  .logo-holder {
    overflow: hidden;
    padding: 0 0 0 4px;
  }

  .logo-holder.bug {
    background-color: #90c12c;
  }
  .logo-holder.dark {
    background-color: #5a5366;
  }
  .logo-holder.dragon {
    background-color: #0a6dc4;
  }
  .logo-holder.electric {
    background-color: #f3d23b;
  }
  .logo-holder.fairy {
    background-color: #ec8fe6;
  }
  .logo-holder.fighting {
    background-color: #ce4069;
  }
  .logo-holder.fire {
    background-color: #ff9c54;
  }
  .logo-holder.flying {
    background-color: #8fa8dd;
  }
  .logo-holder.ghost {
    background-color: #5269ac;
  }
  .logo-holder.grass {
    background-color: #63bb5b;
  }
  .logo-holder.ground {
    background-color: #d97746;
  }
  .logo-holder.ice {
    background-color: #74cec0;
  }
  .logo-holder.normal {
    background-color: #9099a1;
  }
  .logo-holder.poison {
    background-color: #ab6ac8;
  }
  .logo-holder.psychic {
    background-color: #f97176;
  }
  .logo-holder.rock {
    background-color: #c7b78b;
  }
  .logo-holder.steel {
    background-color: #5a8ea1;
  }
  .logo-holder.water {
    background-color: #4d90d5;
  }
</style>
