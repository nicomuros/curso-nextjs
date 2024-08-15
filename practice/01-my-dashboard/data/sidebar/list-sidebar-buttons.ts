import { ISidebarButton } from '../../interfaces/sidebar-button'
import HomeIcon from '@mui/icons-material/Home'
import CalculateIcon from '@mui/icons-material/Calculate'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'

export const sidebarButtons: ISidebarButton[] = [
  {
    text: 'Home',
    subtext: 'Pagina redirigida',
    path: '/dashboard/home',
    icon: HomeIcon
  },
  {
    text: 'Counter',
    subtext: 'Componente client-side',
    path: '/dashboard/counter',
    icon: CalculateIcon
  },
  {
    text: 'Pokemons Table',
    subtext: 'Data Grid',
    path: '/dashboard/pokemons/data-grid',
    icon: CatchingPokemonIcon
  },
  {
    text: 'Pokemons SSG',
    subtext: 'Generacion Estatica',
    path: '/dashboard/pokemons/ssg',
    icon: CatchingPokemonIcon
  }
]