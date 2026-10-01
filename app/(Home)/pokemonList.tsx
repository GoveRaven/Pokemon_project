'use client';

import { useState } from 'react';
import { TShortPokemonInfo } from '@/types/pokemonTypes';
import { getListOfPokemon } from '@/api/service/pokemon/getPokemonList';

type PokemonListProps = {
  initState: TShortPokemonInfo[];
};

export function PokemonList({ initState }: PokemonListProps) {
  const [list, setList] = useState(initState);

  const onClick = async () => {
    const newPokemons = await getListOfPokemon(20, list.length);
    return setList((prevList) => [...prevList, ...newPokemons]);
  };

  return (
    <div className='grid grid-cols-4 gap-4'>
      {list.map((el) => (
        <div
          key={el.id}
          className='flex items-center gap-3 rounded-lg border border-[#1F3D2B] bg-[#D8E8D5] p-3'
        >
          <img
            src={el.image}
            alt={el.name}
            className='h-20 w-20 object-contain'
          />

          <div>
            <p className='text-sm text-[#1F3D2B]'>#{el.id.padStart(3, '0')}</p>
            <p className='font-semibold capitalize text-[#1F3D2B]'>{el.name}</p>
          </div>
        </div>
      ))}
      <button
        type='button'
        className='mt-6 rounded-lg bg-[#DC0A2D] px-5 py-2 font-semibold text-white'
        onClick={onClick}
      >
        Загрузить ещё
      </button>
    </div>
  );
}
