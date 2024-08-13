import { Grid, Typography } from '@mui/material'
import Link from 'next/link'
import NavbarLinks from './NavbarLinks'

export default function Navbar() {
  return (
    <Grid
      container
      direction={ "row" }
      justifyContent={ "space-between" }
      alignItems={ "center" }
      p={2}
    >
      <Grid item>
        <Link href={ '/' }>
          <Typography variant='h6'>Home</Typography>
          </Link>
        </Grid>
      <Grid item>
        <NavbarLinks />
      </Grid>
    </Grid>
  )
}
