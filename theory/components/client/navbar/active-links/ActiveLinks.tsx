'use client'

import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { INavbarLinks } from '../../../../interfaces/navbar-links';
import styles from './ActiveLinks.module.css'
import { usePathname } from 'next/navigation'

const ActiveLinks = ({ path, text }: INavbarLinks) => {

  const pathName = usePathname();

  return (
      <Link href={ path } className={`${styles.link} ${(pathName === path) && styles['active-link']}`}>
        <Typography variant='h6'>{ text }</Typography>
      </Link>
  )
}

export default ActiveLinks