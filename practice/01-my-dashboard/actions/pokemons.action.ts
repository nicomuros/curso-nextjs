import { ISimplePokemon } from '../interfaces'
import { IPokemonResponseList } from '../interfaces/pokemon-url-list'

export const fetchListaPokemons = async (limit: number = 100, offset: number = 0): Promise<ISimplePokemon[]> => {
  const response = await fetch(`${ process.env.POKEMON_API_URL }?limit=${ limit }&offset=${ offset }`)
  const data = await response.json()
  const pokemons: ISimplePokemon[] = data.results.map((pokemon: ISimplePokemon) => {
    return {
      id: pokemon.url.split('/').at(-2) || pokemon.url,
      name: pokemon.name,
      url: pokemon.url
    }
  })
  return pokemons
}
