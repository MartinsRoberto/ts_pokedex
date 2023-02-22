import { useState, useEffect, memo } from 'react'
import pokeFetch from '../axios/config'

import './PokeList.css'

type Props = {
  gen: number
}

interface Pokemon {
  id: number,
  name: string,
  img: string,
  type1: string,
  type2: string
}

const genNumber: { [key: number]: [number, number] } = {
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 493],
  5: [494, 649],
  6: [650, 721],
  7: [722, 809],
  8: [810, 905],
}

const PokeList = memo(({ gen }: Props) => {
  const [pokeList, setPokeList] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getPokemon = async (start: number, end: number) => {
    setIsLoading(true)
    const newPokeList: Pokemon[] = [];

    for (let index = start; index <= end; index++) {

      const response = await pokeFetch.get("/" + index)
      const data = response.data

      const newPoke: Pokemon = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type1: data.types[0].type.name,
        type2: data.types[1] ? data.types[1].type.name : "",
      }

      newPokeList.push(newPoke);
    }

    setPokeList((prevList) => [...prevList, ...newPokeList]);
    setIsLoading(false)
  }

  useEffect(() => {
    setPokeList([])
    getPokemon(genNumber[gen][0], genNumber[gen][1])
  }, [gen])

  const loadMore = () => {
    const start = pokeList.length + genNumber[gen][0];
    const end = start + 99;
    getPokemon(start, end);
  }

  return (
    <div className='poke-table'>
      {isLoading && <div className='loading'>Loading...</div>}

      {pokeList.length > 0 && pokeList.map((poke) => (
        <div key={poke.id} className="poke-card">
          <img src={poke.img} alt="" width={100} />
          <div className="id">#{poke.id.toString().padStart(3, '0')}</div>
          <div className="name">{poke.name}</div>
          <div className="types">
            <span className={poke.type1}>{poke.type1}</span>
            {poke.type2 && <span className={poke.type2}>{poke.type2}</span>}
          </div>
        </div>
      ))}

    </div>
  )
})

export default PokeList