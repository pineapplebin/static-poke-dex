import type { TStaticPokemon } from '@/types/base';
import type { PokemonSpeciesVariety } from 'pokenode-ts';
import POKEMON_LIST from 'pokesprite-images/data/pokemon.json';
import type { TFormData } from './fetch';

const HARD_MAPPING: Record<
  string,
  (staticInfo: TStaticPokemon, varieties: PokemonSpeciesVariety[]) => TFormData[]
> = {};

export function transForm(
  no: string,
  staticInfo: TStaticPokemon,
  varieties: PokemonSpeciesVariety[]
): TFormData[] {
  const info = POKEMON_LIST[no as keyof typeof POKEMON_LIST];

  const regexp = new RegExp(`^${info.slug.eng}\\-?`);

  if (no in HARD_MAPPING && typeof HARD_MAPPING[no] === 'function') {
    return HARD_MAPPING[no](staticInfo, varieties);
  }

  return varieties.map((item) => {
    const form = item.pokemon.name.replace(regexp, '');
    return {
      form: form || '$',
      url: item.pokemon.url
    };
  });
}
