import { writable } from 'svelte/store';

export interface TAvailableDialogData {
  pokeInfo: {
    no: string;
    form?: string;
  };
  game: string;
  available: string;
}

export const availableDialogData = writable<TAvailableDialogData>({
  pokeInfo: { no: '' },
  game: '',
  available: ''
});
