import { TEvolutionChain } from './evolution';

export type TPokemonList = {
  id: number;
  sprite: string;
  name: string;
};

export type TPokemonPageData = {
  id: number;
  name: string;

  images: {
    sprite: string | null;
    officialArtwork: string | null;
  };

  height: number | null | undefined;
  weight: number | null | undefined;

  types: string[];

  stats: TPokemonStats;

  description: string | undefined;

  generation: string;
  habitat: string | null;

  evolutionChain: TEvolutionChain;
};

export type TShortPokemonInfo = {
  name: string;
  id: string;
  image: string;
};

export type TPokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};
