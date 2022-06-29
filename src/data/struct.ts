import POKEMON_LIST from 'pokesprite-images/data/pokemon.json';
import { padStart } from 'lodash';
import type { TPokemonInfo } from '../types/base';

export function getPokemonInfo(no: string | number): TPokemonInfo {
  const idx = padStart('' + no, 3, '0') as keyof typeof POKEMON_LIST;
  return POKEMON_LIST[idx] as TPokemonInfo;
}
