import { TEvolutionChain } from './evolution';

export type TPokemonPageData = {
  id: number;
  name: string;

  images: {
    sprite: string | null;
    officialArtwork: string | null;
  };

  height: number | null;
  weight: number | null;

  types: string[];

  stats: TPokemonStats;

  description: string | null;

  generation: string;

  evolutionChain: TEvolutionChain;
};

export type TShortPokemonInfo = {
  name: string;
  id: number;
  image: string;
};

export type TPokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
};
