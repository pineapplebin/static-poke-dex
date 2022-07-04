import type { Action } from 'svelte/action';

export type TPosition = {
  x: number;
  y: number;
};

export const draggable: Action<HTMLElement, { disabled: boolean }> = (node, params) => {
  let disabled = !!params?.disabled;
  let isMoving = false;
  let currX = 0;
  let currY = 0;

  function handleTouchStart() {
    isMoving = true;
  }

  function handleTouchMove(e: TouchEvent) {
    if (isMoving && !disabled) {
      const target = e.targetTouches[0];
      currX = target.pageX;
      currY = target.pageY;
      node.dispatchEvent(new CustomEvent('draggable', { detail: { x: currX, y: currY } }));
    }
  }

  function handleTouchEnd() {
    isMoving = false;
    node.dispatchEvent(new CustomEvent('draggableend'));
  }

  node.addEventListener('touchstart', handleTouchStart);

  document.addEventListener('touchmove', handleTouchMove);
  document.addEventListener('touchend', handleTouchEnd);

  return {
    update(params) {
      disabled = !!params?.disabled;
    },
    destroy() {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }
  };
};
