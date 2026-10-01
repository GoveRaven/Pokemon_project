import { pokemonList } from '@/src/generated';
import { getSinglePokemon } from './getSinglePokemon';
import { TShortPokemonInfo } from '@/types/pokemonTypes';

export async function getListOfPokemon(): Promise<TShortPokemonInfo[]> {
  const listData = (await pokemonList()).data;
  console.log(listData);
  const listOfPokemon = await Promise.all(
    listData.results.map((pokemon) => {
      const pokemonID = pokemon.url.split('/').at(-2);

      if (!pokemonID) {
        throw new Error(
          `Не удалось получить ID Pokémon из URL: ${pokemon.url}`,
        );
      }

      return getSinglePokemon(pokemon.name, pokemonID);
    }),
  );

  return listOfPokemon;
}
