import { Metadata } from 'next'
import { Container } from '@mui/material'
import PokemonList from '../../../../components/server/pokemons/pokemonList/PokemonList'

export const metadata: Metadata = {
  title: 'Pokemons Data Grid',
  description: 'Pokemons page'
}

const PokemonsPage = async () => {
  return (
    <Container maxWidth='xl'>
      <PokemonList />
    </Container>
  )
}

export default PokemonsPage
