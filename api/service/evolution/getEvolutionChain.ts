import { evolutionChainRetrieve } from '@/src/generated';
import { EvolutionChainLink } from '@/src/generated/pokéAPI.schemas';
import { TEvolutionChain } from '@/types/evolution';

export async function getEvolutionChain(evolutonChainID: string) {
  const data = await evolutionChainRetrieve(evolutonChainID);
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
