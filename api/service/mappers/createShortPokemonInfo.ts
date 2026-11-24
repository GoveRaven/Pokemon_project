import { TShortPokemonInfo } from '@/types/pokemonTypes';

export function createShortPokemonInfo(
  pokemonName: string,
  pokemonId: string,
): TShortPokemonInfo {
  return {
    name: pokemonName,
    id: Number(pokemonId),
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`,
  };
}
