import { UtilityClient, PokemonClient, type PokemonSpecies, type Pokemon } from 'pokenode-ts';
import type { TStaticPokemon } from '@/types/base';
import { fetchStaticPokemon } from '@/data/fetch-static';

const client = new PokemonClient();
const utilClient = new UtilityClient();

export interface TFormData {
  form: string;
  url: string;
}

export interface TFetchDetailDataRes {
  static: TStaticPokemon;
  info?: PokemonSpecies;
  forms?: TFormData[];
}

export async function fetchDetailData(no: string) {
  const [staticRes, pokeRes] = await Promise.allSettled([
    fetchStaticPokemon(no),
    client.getPokemonSpeciesById(+no)
  ]);

  if (staticRes.status === 'rejected') {
    return Promise.reject(staticRes.reason);
  }

  const result: TFetchDetailDataRes = { static: staticRes.value };

  if (pokeRes.status === 'rejected') {
    return result;
  }

  result.info = pokeRes.value;

  const regexp = new RegExp(`^${result.info.name}\\-?`);
  result.forms = pokeRes.value.varieties.map((item) => {
    const form = item.pokemon.name.replace(regexp, '');
    return {
      form: form || '$',
      url: item.pokemon.url
    };
  });

  return result;
}

export function fetchPokemonByUrl(url: string): Promise<Pokemon> {
  return utilClient.getResourceByUrl(url);
}
