import { Box } from '@mui/material'
import sizeConfigs from '../../../configs/sizeConfig'
import colorConfigs from '../../../configs/colorConfig'
import DrawerComponent from './DrawerComponent'

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={ { display: "flex" } }>
      <Box
        component="nav"
        sx={ {
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        } }
      >
        <DrawerComponent />
      </Box>
      <Box
        component="main"
        sx={ {
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${ sizeConfigs.sidebar.width })`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        } }
      >
        { children }
      </Box>
    </Box>
  )
} 