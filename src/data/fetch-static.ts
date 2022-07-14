import type { TStaticPokemon } from '@/types/base';
import { fillNo } from '@/utils/functional';

export function fetchStaticPokemon(no: string | number): Promise<TStaticPokemon> {
  return import(`./static-json/${fillNo(no)}.json`);
}
