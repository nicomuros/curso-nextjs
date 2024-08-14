'use client'

import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { ISidebarButton } from '../../../../interfaces/sidebar-button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function SidebarButton(button: ISidebarButton) {
  const pathName = usePathname()

  return (
    <Link href={ button.path } passHref>
      <ListItem key={ button.text } disablePadding>
        <ListItemButton
          selected={ pathName === button.path }
          sx={ {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
          } }
        >
          <ListItemIcon sx={ {
            scale: "1.2",
            paddingLeft: 1
          } }>
            <button.icon />
          </ListItemIcon>
          <Box>
            <ListItemText primary={ button.text } sx={ {
              "& .MuiListItemText-primary": {
                fontSize: "1.2rem",
              }
            } } />
            <ListItemText secondary={ button.subtext } />
          </Box>
        </ListItemButton>
      </ListItem>
    </Link>
  )
}