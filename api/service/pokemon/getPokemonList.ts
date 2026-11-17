import { pokemonList } from '@/src/generated';
import { getSinglePokemon } from './getSinglePokemon';
import { TShortPokemonInfo } from '@/types/pokemonTypes';
import { getIdFromUrl } from '@/api/utils/getIdFromUrl';

export async function getListOfPokemon(
  limit: number = 20,
  offset: number = 0,
): Promise<TShortPokemonInfo[]> {
  const listData = (await pokemonList({ limit, offset })).data;
  const listOfPokemon = listData.results.map((pokemon) => {
    const pokemonID = getIdFromUrl(pokemon.url);

    if (!pokemonID) {
      throw new Error(`Не удалось получить ID Pokémon из URL: ${pokemon.url}`);
    }

    return getSinglePokemon(pokemon.name, pokemonID);
  });
  return listOfPokemon;
}
