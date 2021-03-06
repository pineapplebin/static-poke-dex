import type { Action } from 'svelte/action';

export type TPosition = {
  x: number;
  y: number;
};

export const draggable: Action<HTMLElement, { disabled: boolean }> = (node, params) => {
  let disabled = !!params?.disabled;
  let isMoving = false;

  function handleTouchStart(e: TouchEvent) {
    isMoving = true;
    const target = e.targetTouches[0];
    node.dispatchEvent(
      new CustomEvent('draggablestart', { detail: { x: target.clientX, y: target.clientY } })
    );
  }

  function handleTouchMove(e: TouchEvent) {
    if (isMoving && !disabled) {
      const target = e.targetTouches[0];
      node.dispatchEvent(
        new CustomEvent('draggable', { detail: { x: target.clientX, y: target.clientY } })
      );
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
