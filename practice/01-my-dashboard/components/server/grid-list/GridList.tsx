import { Paper } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface Props {
  columns: GridColDef[],
  rows: any[],
}

export default function GridList(props: Props) {
  return (
    <Paper elevation={ 4 } sx={ { maxWidth: { xs: '100%' }, width: '100%' } }>
      <DataGrid
        rows={ props.rows }
        columns={ props.columns }
        initialState={ {
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        } }
        pageSizeOptions={ [5, 10, 20] }
        autoHeight
      />
    </Paper>
  )
}