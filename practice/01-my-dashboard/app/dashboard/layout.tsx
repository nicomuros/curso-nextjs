import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

export default function TemporaryDrawer({ children }: { children: React.ReactNode }) {
  const DrawerList = (
    <Box sx={ { width: 250 } } role="presentation">
      <List>
        { ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={ text } disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
              </ListItemIcon>
              <ListItemText primary={ text } />
            </ListItemButton>
          </ListItem>
        )) }
      </List>
      <Divider />
      <List>
        { ['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={ text } disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { index % 2 === 0 ? <InboxIcon /> : <MailIcon /> }
              </ListItemIcon>
              <ListItemText primary={ text } />
            </ListItemButton>
          </ListItem>
        )) }
      </List>
    </Box>
  )
  return (
    <div>
      <Drawer open={ true } variant={ 'persistent' }>
        { DrawerList }
      </Drawer>
      { children }
    </div>
  )
}