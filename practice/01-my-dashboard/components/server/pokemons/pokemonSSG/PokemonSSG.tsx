import { ISimplePokemon } from '@/interfaces'
import { fetchListaPokemons } from '@/actions'
import { Grid, Typography } from '@mui/material'
import TarjetaPokemon from '../../card/TarjetaPokemon'

export default async function PokemonSSG() {

  const pokemons: ISimplePokemon[] = await fetchListaPokemons()

  return (
    <Grid container sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' } } gap={ 4 }>
      <Grid item xs={ 12 } sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center', paddingY: 10 } }>
        <Typography variant='h2'>Pokemons</Typography>
      </Grid>
      {
        pokemons.map((pokemon: ISimplePokemon) => (
          <Grid
            key={ pokemon.url }
            item
            xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }
            sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center' } }
          >
            <TarjetaPokemon { ...pokemon } />
          </Grid>
        ))
      }
    </Grid>
  )
}
