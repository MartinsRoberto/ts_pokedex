import { useState, useEffect } from 'react'
import pokeFetch from '../axios/config'

import './PokeList.css'
type Props = {
  gen: number
}

interface Poke {
  id: number,
  name: string,
  img: string,
  type1: string,
  type2: string
}

const PokeList = ({ gen }: Props) => {
  const [pokeList, setPokeList] = useState<Poke[]>([])

  const getPokemon = async () => {
    const newPokeList: Poke[] = [];

    for (let index = 1; index < 152; index++) {
      const response = await pokeFetch.get("/" + index)
      const data = response.data

      const newPoke: Poke = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type1: data.types[0].type.name,
        type2: data.types[1] ? data.types[1].type.name : "",
      }

      newPokeList.push(newPoke);
      setPokeList(newPokeList);
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className='poke-table'>
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
}

export default PokeList