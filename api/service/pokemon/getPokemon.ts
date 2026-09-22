import { pokemonRetrieve } from '@/src/generated';
import { TPokemonPageData, TPokemonStats } from '@/types/pokemonTypes';
import { getPokemonSpecies } from '../species/getPokemonSpecies';

export async function getPokemonPageData(
  id: number,
): Promise<TPokemonPageData> {
  const pokemonData = (await pokemonRetrieve(String(id))).data;
  const pokemonSpecies = await getPokemonSpecies(id);
  const response = {
    id: pokemonData.id,
    name: pokemonData.name,
    images: {
      sprite: pokemonData.sprites.front_default,
      officialArtwork:
        pokemonData.sprites.other['official-artwork'].front_default,
    },
    height: pokemonData.height,
    weight: pokemonData.weight,
    types: pokemonData.types.map((type) => type.type.name),
    // Избавиться от as TPokemonStats
    stats: Object.fromEntries(
      pokemonData.stats.map((stat) => [stat.stat.name, stat.base_stat]),
    ) as TPokemonStats,
    description: pokemonSpecies.description,
    generation: pokemonSpecies.generation,
    habitat: pokemonSpecies.habitat,
    evolution: pokemonSpecies.evolution,
  };
  return response;
}