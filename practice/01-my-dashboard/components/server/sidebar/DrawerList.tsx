import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

export default function DrawerList() {
  return (
    <Box role="presentation">
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
}