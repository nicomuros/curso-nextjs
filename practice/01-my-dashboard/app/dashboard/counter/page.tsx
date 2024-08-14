import { Container, Paper, Typography } from '@mui/material'
import Counter from '../../../components/client/counter/Counter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Counter',
  description: 'Counter page',
}

export default function CounterPage() {
  return (
    <Container
      maxWidth='xl'
      sx={ { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' } }
    >
      <Paper
        elevation={ 16 }
        sx={ {
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        } }
      >
        <Typography variant='h2' align='center'>Counter</Typography>
        <Counter />
      </Paper>
    </Container>
  )
}
