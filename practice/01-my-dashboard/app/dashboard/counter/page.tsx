import { Box, Container, Grid, Typography } from '@mui/material'

export default function CounterPage() {
  return (
    <Box>
      <Container>
        <Grid container spacing={ 2 }>
          <Grid item xs={ 12 }>
            <Typography variant='h1'>Counter Page</Typography>
          </Grid>
          <Grid item xs={ 12 }>
            <Typography variant='h2'>Counter</Typography>
            <Typography variant='h3'>0</Typography>
          </Grid>
          <Grid item xs={ 12 }>
            <button>Increment</button>
            <button>Decrement</button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}