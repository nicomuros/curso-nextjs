import { IPokemonResponseList, IPokemonResult, ISimplePokemon } from '@/interfaces'
import { fetchListaPokemons } from '@/actions'
import { Box, Grid, Paper, Typography } from '@mui/material'
import GridList from '../../grid-list/GridList'
import { GridColDef } from '@mui/x-data-grid'

export default async function PokemonList() {

  const pokemons: ISimplePokemon[] = await fetchListaPokemons()

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 2 },
    { field: 'url', headerName: 'URL', flex: 6 }
  ]

  return (
    <Grid container sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' } }>
      <Grid
        item
        xl={ 8 }
        md={ 8 }
        xs={ 12 }
        sx={ {
          px: { xs: 2, md: 5, xl: 10 },
          py: { xs: 2, md: 3, xl: 5 },
        } }
      >
        <Paper
          elevation={ 1 }
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            px: { xs: 1, md: 2, xl: 4 },
            pt: { xs: 0, md: 2, xl: 2 },
            pb: { xs: 1, md: 2, xl: 4 },
          } }
        >
          <Box sx={ { display: 'flex', justifyContent: 'center', p: 2 } }>
            <Typography variant='h2'>Pokemons</Typography>
          </Box>
          <GridList columns={ columns } rows={ pokemons } />
        </Paper>
      </Grid>
    </Grid>
  )
}