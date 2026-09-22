import { evolutionChainRetrieve } from '@/src/generated';
import { EvolutionChainLink } from '@/src/generated/pokéAPI.schemas';
import { TEvolutionChain } from '@/types/evolution';

export async function getEvolutionChain(evolutonChainID: string) {
  const data = await evolutionChainRetrieve(evolutonChainID);
  return culcEvolutionChain(data.data.chain.evolves_to, data.data.id);
}

function culcEvolutionChain(
  evolvesTo: EvolutionChainLink[],
  evolutionChainID: number,
): TEvolutionChain[] {
  return evolvesTo.flatMap((el) => {
    const currentEvolution = {
      name: el.species.name,
      evolutionChainID,
    };

    if (el.evolves_to.length === 0) {
      return [currentEvolution];
    }

    return [
      currentEvolution,
      ...culcEvolutionChain(el.evolves_to, evolutionChainID),
    ];
  });
}
