import { getIdFromUrl } from '@/api/utils/getIdFromUrl';
import { PokemonSummary } from '@/src/generated/pokéAPI.schemas';
import { TShortPokemonInfo } from '@/types/pokemonTypes';
import { createShortPokemonInfo } from './createShortPokemonInfo';

export function mapPokemonList(
  pokemonList: PokemonSummary[],
): TShortPokemonInfo[] {
  return pokemonList.map((pokemon) => {
    const pokemonId = getIdFromUrl(pokemon.url);
    return createShortPokemonInfo(pokemon.name, pokemonId);
  });
}
