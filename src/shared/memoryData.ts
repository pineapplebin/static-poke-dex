import { browser } from '$app/env';
import { writable } from 'svelte/store';
import debounce from 'lodash/debounce.js';
import type { TPosition } from '@/utils/actions/draggable';

export interface TMemoryData {
  currentTab: string;
  magicButtonPos: TPosition;
}

const KEY = '$_memoryData';

function loadFromStorage(): Partial<TMemoryData> {
  try {
    if (browser) {
      const cached = localStorage.getItem(KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    }
  } catch (e) {}
  return {};
}

export const memoryData = writable<TMemoryData>({
  currentTab: 'I',
  magicButtonPos: {
    x: 10000,
    y: 600
  },
  ...loadFromStorage()
});

if (browser) {
  memoryData.subscribe(
    debounce((value) => {
      localStorage.setItem(KEY, JSON.stringify(value));
    }, 300)
  );
}
