import { Container, Grid, Typography } from '@mui/material'

export default function CounterPage() {
  return (
    <Container>
      <Grid
        container
        alignContent={ 'center' }
        justifyContent={ 'center' }>
        <Grid item><Typography variant="h1">Counter</Typography></Grid>
      </Grid>
    </Container>
  )
}