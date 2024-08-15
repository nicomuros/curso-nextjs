import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import { ISimplePokemon } from '@/interfaces'

export default function TarjetaPokemon(pokemon: ISimplePokemon) {
  return (
    <Card sx={ { width: { xs: 250, sm: 300 }, height: { xs: 350, sm: 400 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', paddingTop: 5 } }>
      <CardMedia sx={ { display: 'flex', alignItems: 'center', justifyContent: 'center', width: { xs: 100, sm: 200 }, height: { xs: 120, sm: 220 } } }>
        <Image
          src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ pokemon.id }.svg` }
          alt={ pokemon.name }
          width={ 150 }
          height={ 150 }
          style={ { maxHeight: '180px', objectFit: 'contain' } }
        />
      </CardMedia>
      <CardContent sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' } }>
        <Typography variant='h5' sx={ { textTransform: 'uppercase' } }>{ pokemon.name }</Typography>
      </CardContent>
    </Card>
  )
}