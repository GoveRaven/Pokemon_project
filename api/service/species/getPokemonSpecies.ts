import { pokemonSpeciesRetrieve } from '@/src/generated';
import { getEvolutionChain } from '../evolution/getEvolutionChain';
import { getIdFromUrl } from '@/api/utils/getIdFromUrl';

export async function getPokemonSpecies(id: number) {
  const pokemonSpecies = (await pokemonSpeciesRetrieve(String(id))).data;
  const evolutionChainID = getIdFromUrl(pokemonSpecies.evolution_chain.url);
  const evolution = await getEvolutionChain(evolutionChainID);
  const response = {
    description: pokemonSpecies.flavor_text_entries.find(
      (el) => el.language.name === 'en',
    )?.flavor_text,
    generation: pokemonSpecies.generation.name.split('-')[1],
    habitat: pokemonSpecies.habitat.name,
    evolution,
  };
  return response;
}
