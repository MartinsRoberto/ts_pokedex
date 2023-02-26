import axios, { AxiosInstance } from "axios"

export const pokeFetch: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  headers: {
    "Content-Type": "application/json",
  },
})

export const pokeImg: AxiosInstance = axios.create({
  baseURL: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/",
  headers: {
    "Content-Type": "application/json",
  },
})
