import {
  evolutionChainRetrieve,
  pokemonRetrieve,
  pokemonSpeciesRetrieve,
} from '@/src/generated';
import {
  PokemonSpeciesFlavorText,
  PokemonStat,
  PokemonType,
} from '@/src/generated/pokéAPI.schemas';
import { TPokemonPageData } from '@/types/pokemonTypes';

export async function getPokemon(id: number): Promise<TPokemonPageData> {
  const pokemonData = (await pokemonRetrieve(String(id))).data;
  const pokemonSpecies = await getPokemonSpecies(id);
  const stats = getPokemonStats(pokemonData.stats);
  const types = getPokemonTypes(pokemonData.types);
  const response = {
    id: pokemonData.id,
    name: pokemonData.name,
    images: {
      sprite: pokemonData.sprites.front_default,
      officialArtwork: pokemonData.sprites.other['official-artwork'],
    },
    height: pokemonData.height,
    weight: pokemonData.weight,
    types: types,
    stats: stats,
    description: pokemonSpecies.description,
    generation: pokemonSpecies.generation,
    habitat: pokemonSpecies.habitat,
    //TODO: написать утилиту, преобразующую цепочку эволюций в нужный формат
    evolution: [
      {
        name: 'string',
        image: 'string',
      },
    ],
  };
  return response;
}

async function getPokemonSpecies(id: number) {
  const pokemonSpecies = (await pokemonSpeciesRetrieve(String(id))).data;
  const description = getDescription(pokemonSpecies.flavor_text_entries);
  const evolutionChain = pokemonSpecies.evolution_chain.url.split('/')[6];
  const evolution = (await evolutionChainRetrieve(evolutionChain)).data;
  const response = {
    description,
    generation: pokemonSpecies.generation.name.split('-')[1],
    habitat: pokemonSpecies.habitat.name,
    evolution,
  };
  return response;
}

function getDescription(descriptions: readonly PokemonSpeciesFlavorText[]) {
  return descriptions.find((el) => el.language.name === 'en')?.flavor_text;
}

function getPokemonStats(stats: readonly PokemonStat[]) {
  const response: Record<string, number> = {};
  for (const stat of stats) {
    response[stat.stat.name] = stat.base_stat;
  }
  return response;
}

function getPokemonTypes(types: readonly PokemonType[]) {
  const response = types.map((type) => type.type.name);
  return response;
}
