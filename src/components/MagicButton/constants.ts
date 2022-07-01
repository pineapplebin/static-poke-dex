import type { Writable } from 'svelte/store';

export const CONTEXT_KEY = Symbol('MagicButtonActive');

export type TContext = Writable<boolean>;
