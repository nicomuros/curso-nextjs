import { Metadata } from 'next'
import { IPokemonList } from '../../../../interfaces/pokemon-url-list'
import { fetchListaPokemons } from '../../../../actions/pokemons.action'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

export const metadata: Metadata = {
  title: 'Pokemons Data Grid',
  description: 'Pokemons page'
}

const PokemonsPage = async () => {
  const pokemonList: IPokemonList = await fetchListaPokemons()

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'url', headerName: 'URL', flex: 3 }
  ]

  const rows = pokemonList.results.map((pokemon, index) => ({
    id: index,
    name: pokemon.name,
    url: pokemon.url
  }))

  return (
    <Container maxWidth='xl'>
      <Grid container sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' } }>
        <Grid
          item
          xl={ 6 }
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
            <Paper elevation={ 4 } sx={ { maxWidth: { xs: '100%', md: '600px' }, width: '100%' } }>
              <DataGrid
                rows={ rows }
                columns={ columns }
                initialState={ {
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                } }
                pageSizeOptions={ [5, 10, 20] }
                autoHeight
              />
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default PokemonsPage
