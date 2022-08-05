import { UtilityClient, PokemonClient, type PokemonSpecies, type Pokemon } from 'pokenode-ts';
import type { TStaticPokemon } from '@/types/base';
import { fetchStaticPokemon } from '@/data/fetch-static';
import { transForm } from './trans-form';

export const client = new PokemonClient();
export const utilClient = new UtilityClient();

export interface TFormData {
  form: string;
  url: string;
  icon?: string;
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

  result.forms = transForm(no, staticRes.value, pokeRes.value.varieties);

  return result;
}

export function fetchPokemonByUrl(url: string): Promise<Pokemon> {
  return utilClient.getResourceByUrl(url);
}
