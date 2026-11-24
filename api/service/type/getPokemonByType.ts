import { typeRetrieve } from '@/src/generated';
import { TShortPokemonInfo } from '@/types/pokemonTypes';
import { mapPokemonList } from '../mappers/mapPokemonList';

export async function getPokemonByType(
  typeName: string,
  limit: number = 20,
  offset: number = 0,
): Promise<TShortPokemonInfo[]> {
  const listByType = (await typeRetrieve(typeName)).data.pokemon;
  return mapPokemonList(
    listByType.slice(offset, limit + offset).map(({ pokemon }) => pokemon),
  );
}
