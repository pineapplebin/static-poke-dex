import POKEMON_LIST from 'pokesprite-images/data/pokemon.json';
import { padStart } from 'lodash';

/**
 * @param {string | number} no
 * @returns {import('../types/base').TPokemonInfo}
 */
export function getPokemonInfo(no) {
  return POKEMON_LIST[padStart('' + no, 3, '0')];
}
