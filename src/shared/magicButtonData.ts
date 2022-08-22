import { writable } from 'svelte/store';

export type TMagicButtonData = {
  mode: 'normal' | 'select';
};

export const magicButtonData = writable<TMagicButtonData>({
  mode: 'normal'
});

export const MODE_NAME: Record<TMagicButtonData['mode'], string> = {
  normal: '普通模式',
  select: '选择模式'
};
