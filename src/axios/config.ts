import axios, { AxiosInstance } from "axios"

const pokeFetch: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
  headers: {
    "Content-Type": "application/json",
  },
})

export default pokeFetch