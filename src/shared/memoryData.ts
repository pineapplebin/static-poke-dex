import { browser } from '$app/env';
import { writable } from 'svelte/store';

export interface TMemoryData {
  currentTab: string;
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

export const memoryData = writable<TMemoryData>({ currentTab: 'I', ...loadFromStorage() });

if (browser) {
  memoryData.subscribe((value) => {
    localStorage.setItem(KEY, JSON.stringify(value));
  });
}
