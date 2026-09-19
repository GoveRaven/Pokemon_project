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

  height: number;
  weight: number;

  types: string[];

  stats: TPokemonStats;

  description: string;

  generation: string;
  habitat: string | null;

  evolution: {
    name: string;
    image: string | null;
  }[];
};

export type TPokemonStats = {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};
