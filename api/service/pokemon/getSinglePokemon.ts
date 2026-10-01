import { TShortPokemonInfo } from "@/types/pokemonTypes";

export function getSinglePokemon(pokemonName: string, pokemonID: string): TShortPokemonInfo {
  return {
    name: pokemonName,
    id: pokemonID,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`,
  };
}