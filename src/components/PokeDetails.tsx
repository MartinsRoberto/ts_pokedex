import { useState, useEffect } from 'react'
import { pokeFetch, pokeImg } from '../axios/config'

import './PokeDetails.css'

type Props = {
  id: number
}

type Pokemon = {
  id: number,
  name: string,
  type1: string,
  type2?: string,
  height: number,
  weight: number,
  abilities: string[],
  hp: number,
  atk: number,
  def: number,
  spa: number,
  spd: number,
  spe: number,
}

const PokeDetails = ({ id }: Props) => {
  const [pokeInfo, setPokeInfo] = useState<Pokemon>()

  const getPokemon = async (id: number) => {
    const response = await pokeFetch.get('/' + id)
    const data = response.data

    const newPoke: Pokemon = {
      id: data.id,
      name: data.name,
      type1: data.types[0].type.name,
      type2: data.types[1] ? data.types[1].type.name : undefined,
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((ability: any) => ability.ability.name),
      hp: data.stats[0].base_stat,
      atk: data.stats[1].base_stat,
      def: data.stats[2].base_stat,
      spa: data.stats[3].base_stat,
      spd: data.stats[4].base_stat,
      spe: data.stats[5].base_stat
    }

    setPokeInfo(newPoke)
  }

  useEffect(() => {
    getPokemon(id)
  }, [])

  return (
    <>
      {pokeInfo && (
        <div id="poke-details">
          <div className="box">
            <h1>{pokeInfo.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeInfo.id}.png`} alt={pokeInfo.name} width={300} />
          </div>
          <div className="box">
            <p>Type: {pokeInfo.type1}{pokeInfo.type2 && `, ${pokeInfo.type2}`}</p>
            <p>Height: {pokeInfo.height}</p>
            <p>Weight: {pokeInfo.weight}</p>
            <p>Abilities: {pokeInfo.abilities.join(', ')}</p>
            <p>Vida: {pokeInfo.hp}</p>
            <p>Ataque: {pokeInfo.atk}</p>
            <p>Defesa: {pokeInfo.def}</p>
            <p>Atq Especial: {pokeInfo.spa}</p>
            <p>Def Especial: {pokeInfo.spd}</p>
            <p>Velocidade: {pokeInfo.spe}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default PokeDetails