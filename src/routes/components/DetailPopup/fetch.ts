import { PokemonClient, type Pokemon } from 'pokenode-ts';
import type { TCheckPokemon, TStaticPokemon } from '@/types/base';
import { fetchStaticPokemon } from '@/data/fetch-static';

const client = new PokemonClient();

export interface TFetchDetailDataRes {
  static: TStaticPokemon;
  info?: Pokemon;
}

export async function fetchDetailData(check: TCheckPokemon) {
  const [staticRes, pokeRes] = await Promise.allSettled([
    fetchStaticPokemon(check.no, check.form),
    client.getPokemonById(+check.no)
  ]);

  if (staticRes.status === 'rejected') {
    return Promise.reject(staticRes.reason);
  }

  const result: TFetchDetailDataRes = { static: staticRes.value };

  if (pokeRes.status === 'rejected') {
    return result;
  }

  result.info = pokeRes.value;

  return result;
}
