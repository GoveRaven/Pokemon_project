import { evolutionChainRetrieve } from '@/src/generated';
import { EvolutionChainLink } from '@/src/generated/pokéAPI.schemas';
import { TEvolutionChain } from '@/types/evolution';

export async function getEvolutonChain(evolutonChainID: string) {
  const data = await evolutionChainRetrieve(evolutonChainID);

  return getEvolutionChain(data.data.chain.evolves_to);
}

function getEvolutionChain(evolvesTo: EvolutionChainLink[]): TEvolutionChain[] {
  return evolvesTo.flatMap((el) => {
    const evolutionID = el.species.url.split('/')[6];

    const currentEvolution = {
      name: el.species.name,
      id: evolutionID,
    };

    if (el.evolves_to.length === 0) {
      return [currentEvolution];
    }

    return [currentEvolution, ...getEvolutionChain(el.evolves_to)];
  });
}
