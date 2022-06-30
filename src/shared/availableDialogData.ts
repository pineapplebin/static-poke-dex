import { writable } from 'svelte/store';

export interface IAvailableDialogData {
  no: string;
  available: string;
}

export const availableDialogData = writable<IAvailableDialogData>({ no: '', available: '' });
