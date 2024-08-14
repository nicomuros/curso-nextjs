'use client'

import { Button, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  const handleIncrement = () => setCount(prev => prev + 1)
  const handleDecrement = () => setCount(prev => prev - 1)

  return (
    <Grid container justifyContent='center' >
      <Grid item xs={ 12 } sx={ { display: 'flex', justifyContent: 'center', alignContent: 'center', paddingBottom: 2 } }>
        <Typography variant='h4' align='center'>{ count }</Typography>
      </Grid>
      <Grid item xs={ 5 } sx={ { display: 'flex', justifyContent: 'center' } }>
        <Button variant="contained" onClick={ handleDecrement }>
          <RemoveIcon />
        </Button>
      </Grid>
      <Grid item xs={ 5 } sx={ { display: 'flex', justifyContent: 'center' } }>
        <Button variant="contained" onClick={ handleIncrement }>
          <AddIcon />
        </Button>
      </Grid>
    </Grid>
  )
}