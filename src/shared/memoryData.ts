import { browser } from '$app/env';
import { writable } from 'svelte/store';
import debounce from 'lodash/debounce.js';
import type { TPosition } from '@/utils/actions/draggable';

export interface TMemoryData {
  currentIndex: number;
  magicButtonPos: TPosition;
  selectedPoke: Record<string, boolean>;
}

const KEY = '$_memoryData';

const DEFAULT_DATA: TMemoryData = {
  currentIndex: 0,
  magicButtonPos: {
    x: 10000,
    y: 600
  },
  selectedPoke: {}
};

function loadFromStorage(): Partial<TMemoryData> {
  const result: Partial<TMemoryData> = {};
  try {
    if (browser) {
      const keys = Object.keys(DEFAULT_DATA) as (keyof TMemoryData)[];

      for (const key of keys) {
        const cached = localStorage.getItem(`${KEY}:${key}`);
        if (cached) {
          result[key] = JSON.parse(cached);
        }
      }
    }

    return result;
  } catch (e) {}
  return {};
}

export const memoryData = writable<TMemoryData>({
  ...DEFAULT_DATA,
  ...loadFromStorage()
});

if (browser) {
  memoryData.subscribe(
    debounce((value) => {
      const keys = Object.keys(value);
      keys.forEach((key) => {
        if (key in DEFAULT_DATA) {
          localStorage.setItem(`${KEY}:${key}`, JSON.stringify(value[key]));
        }
      });
    }, 300)
  );
}
