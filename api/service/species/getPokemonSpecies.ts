import { pokemonSpeciesRetrieve } from '@/src/generated';
import { getEvolutionChain } from '../evolution/getEvolutionChain';
import { getIdFromUrl } from '@/api/utils/getIdFromUrl';
import { TEvolutionChain } from '@/types/evolution';

type TPokemonSpecies = {
  description: string | null;
  generation: string;
  evolution: TEvolutionChain;
};

export async function getPokemonSpecies(id: number): Promise<TPokemonSpecies> {
  const pokemonSpecies = (await pokemonSpeciesRetrieve(String(id))).data;
  const evolutionChainID = getIdFromUrl(pokemonSpecies.evolution_chain.url);
  const evolution = await getEvolutionChain(evolutionChainID);
  const response = {
    description:
      pokemonSpecies.flavor_text_entries.find((el) => el.language.name === 'en')
        ?.flavor_text ?? null,
    generation: pokemonSpecies.generation.name.split('-')[1],
    evolution,
  };
  return response;
}
