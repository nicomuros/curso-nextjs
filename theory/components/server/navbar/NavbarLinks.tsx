import { Grid } from '@mui/material'
import React from 'react'
import { INavbarLinks } from '../../../interfaces/navbar-links'
import ActiveLinks from '../../client/navbar/active-links/ActiveLinks'

const NavbarLinks = () => {
  const links: INavbarLinks[] = [
    { path: '/about', text: 'About' },
    { path: '/contact', text: 'Contact' },
    { path: '/pricing', text: 'Pricing' }
  ]
  return (
    <Grid container spacing="6">
      { links.map(link => { 
        return <Grid item key={ link.path }><ActiveLinks  { ...link } /></Grid>
      })}
    </Grid>
  )
}

export default NavbarLinks