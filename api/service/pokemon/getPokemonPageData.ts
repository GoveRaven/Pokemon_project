import { pokemonRetrieve } from '@/src/generated';
import { TPokemonPageData } from '@/types/pokemonTypes';
import { getPokemonSpecies } from '../species/getPokemonSpecies';
import { statsMapper } from '@/api/service/mappers/statsMapper';

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
    height: pokemonData.height ?? null,
    weight: pokemonData.weight ?? null,
    types: pokemonData.types.map((type) => type.type.name),
    stats: statsMapper(pokemonData.stats),
    description: pokemonSpecies.description,
    generation: pokemonSpecies.generation,
    evolutionChain: pokemonSpecies.evolution,
  };
  return response;
}
