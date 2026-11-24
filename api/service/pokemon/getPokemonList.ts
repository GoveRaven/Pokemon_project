import { pokemonList } from '@/src/generated';
import { TShortPokemonInfo } from '@/types/pokemonTypes';
import { mapPokemonList } from '../mappers/mapPokemonList';

export async function getPokemonList(
  limit: number = 20,
  offset: number = 0,
): Promise<TShortPokemonInfo[]> {
  const listData = (await pokemonList({ limit, offset })).data;
  return mapPokemonList(listData.results);
}
