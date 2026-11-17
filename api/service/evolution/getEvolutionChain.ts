import { evolutionChainRetrieve } from '@/src/generated';
import { EvolutionChainLink } from '@/src/generated/pokéAPI.schemas';
import { TEvolutionChain } from '@/types/evolution';

export async function getEvolutionChain(
  evolutionChainID: string,
): Promise<TEvolutionChain> {
  const data = await evolutionChainRetrieve(evolutionChainID);
  return calcEvolutionChain(data.data.chain);
}

function calcEvolutionChain(chain: EvolutionChainLink): TEvolutionChain {
  return {
    name: chain.species.name,
    evolvesTo: chain.evolves_to.length
      ? chain.evolves_to.map((evol) => calcEvolutionChain(evol))
      : null,
  };
}
