import { PokemonStat } from '@/src/generated/pokéAPI.schemas';
import { TPokemonStats } from '@/types/pokemonTypes';

const stats = {
  hp: 0,
  attack: 0,
  defense: 0,
  'special-attack': 0,
  'special-defense': 0,
  speed: 0,
};

export function statsMapper(
  pokemonStats: readonly PokemonStat[],
): TPokemonStats {
  const result = { ...stats };
  pokemonStats.forEach((el) => {
    if (isStatsKey(el.stat.name)) {
      result[el.stat.name] = el.base_stat;
    }
  });
  return result;
}

function isStatsKey(key: string): key is keyof typeof stats {
  return Object.hasOwn(stats, key);
}
