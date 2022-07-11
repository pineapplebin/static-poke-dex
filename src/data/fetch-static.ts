import padStart from 'lodash/padStart';
import type { TStaticPokemon } from '../types/base';

export function fetchStaticPokemon(no: string | number, form?: string): Promise<TStaticPokemon> {
  const _no = padStart('' + no, 3, '0');
  const name = `${_no}${form ? `-${form}` : ''}`;
  return import(`./static-json/${name}.json`);
}
