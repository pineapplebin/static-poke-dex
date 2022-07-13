import type { TStaticPokemon } from '@/types/base';

export function fetchStaticPokemon(no: string | number): Promise<TStaticPokemon> {
  const _no = ('' + no).padStart(3, '0');
  return import(`./static-json/${_no}.json`);
}
