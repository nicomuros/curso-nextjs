import { IPokemonList } from '../interfaces/pokemon-url-list'

export const fetchListaPokemons = async (limit: number = 100, offset: number = 0): Promise<IPokemonList> => {
  const response = await fetch(`${ process.env.POKEMON_API_URL }?limit=${ limit }&offset=${ offset }`)
  return response.json()
}
