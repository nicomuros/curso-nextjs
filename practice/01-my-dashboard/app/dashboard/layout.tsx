import Sidebar from '@/components/server/sidebar/Sidebar'
import { Box } from '@mui/material'
import sizeConfigs from '../../configs/sizeConfig'

export default function TemporaryDrawer({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={ { display: "flex" } }>
      <Box
        component="nav"
        sx={ {
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        } }
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={ {
          flexGrow: 1,
          width: `calc(100% - ${ sizeConfigs.sidebar.width })`,
          minHeight: "100vh",
        } }
      >
        { children }
      </Box>
    </Box>
  )
}