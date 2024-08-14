import { Avatar, Box, Drawer, List, Stack, Toolbar } from '@mui/material'
import sizeConfigs from '@/configs/sizeConfig'
import colorConfigs from '@/configs/colorConfig'
import { sidebarButtons } from '@/data'
import assets from '@/assets'
import { ISidebarButton } from '@/interfaces'
import SidebarButton from '@/components/client/sidebar/button/SidebarButton'

export default function Sidebar() {
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
        {
          sidebarButtons?.map((button: ISidebarButton) => (
            <SidebarButton key={ button.text } { ...button } />
          ))
        }
      </List>
    </Drawer>
  )
}
