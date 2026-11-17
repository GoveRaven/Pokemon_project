import { getListOfPokemon } from '@/api/service/pokemon/getPokemonList';
import { PokemonList } from './pokemonList';

export default async function Home() {
  // const data = await getPokemonPageData(133);
  // console.log(data);
  const initState = await getListOfPokemon();
  return (
    <main>
      <PokemonList initState={initState} />
    </main>
  );
}
