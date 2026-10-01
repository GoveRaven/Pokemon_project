export type TEvolutionChain = {
  name: string;
  evolvesTo: TEvolutionChain[] | null;
};
