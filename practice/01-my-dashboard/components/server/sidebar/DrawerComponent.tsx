import { Avatar, Drawer, List, Stack, Toolbar } from '@mui/material'
import sizeConfigs from '../../../configs/sizeConfig'
import colorConfigs from '../../../configs/colorConfig'
import DrawerList from './DrawerList'
import assets from '../../../assets'

export default function DrawerComponent() {
  return (
    <Drawer
      variant="permanent"
      sx={ {
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color
        }
      } }
    >
      <List disablePadding>
        <Toolbar sx={ { marginBottom: "20px" } }>
          <Stack
            sx={ { width: "100%" } }
            direction="row"
            justifyContent="center"
          >
            <Avatar src={ assets.images.typescriptlogo.src }></Avatar>
          </Stack>
        </Toolbar>
        <DrawerList />
      </List>
    </Drawer>
  )
}