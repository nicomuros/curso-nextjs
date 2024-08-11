import { Typography } from '@mui/material'


interface Props {
  children: React.ReactNode
}

export default function GeneralLayout({ children }: Props) {
  return(
  <>
    <Typography> Hello World! </Typography>
    { children }
  </>
  );
}