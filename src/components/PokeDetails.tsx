import { useState, useEffect } from 'react'
import pokeFetch from '../axios/config'

type Props = {
  id: number
}

type Pokemon = {
  id: number,
  name: string,
  img: string,
  type1: string,
  type2?: string
}

const PokeDetails = ({ id }: Props) => {
  const [pokemon, setPokemon] = useState<Pokemon>()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string>()

  const getPokemon = async (id: number) => {
    try {
      const response = await pokeFetch.get('/' + id)
      const data = response.data

      const newPoke: Pokemon = {
        id: data.id,
        name: data.name,
        img: data.sprites.front_default,
        type1: data.types[0].type.name,
        type2: data.types[1] ? data.types[1].type.name : "",
      }

      setPokemon(newPoke)
      setIsLoading(false)
    } catch (err) {
      setError('Ocorreu um erro ao obter os dados do Pokémon.')
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPokemon(id)
  }, [])

  return (
    <div>
      <div className='error'>{error && error}</div>
      <div className='loading'>{isLoading && <p>Capturando pokemon...</p>}</div>
      <div className="poke-details">
        {pokemon?.id}
        {pokemon?.name}
      </div>
    </div>
  )
}

export default PokeDetails