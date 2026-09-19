import { getPokemon } from '@/api/service/pokemon/pokemon';

export default async function Home() {
  const data2 = await getPokemon(4);
  console.log(data2);
  return <main></main>;
}
