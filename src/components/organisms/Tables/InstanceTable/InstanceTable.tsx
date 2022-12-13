import { useTheme } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

import { Vm } from '@api-hooks/v1/@types';
import { StatusColumn } from '@components/organisms/Columns';

type Prop = {
  vms: Vm[];
};

const columns: GridColDef[] = [
  { field: 'name', headerName: 'VM', minWidth: 288, flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    width: 192,
    renderCell: (params: GridCellParams<string, Vm>) => <StatusColumn rowId={params.id} />,
  },
];

export const InstanceTable = ({ vms }: Prop) => {
  const [pageSize, setPageSize] = useState(10);

  const {
    palette: {
      grey: { '900': bgColor },
    },
  } = useTheme();

  return (
    <DataGrid
      sx={{ backgroundColor: bgColor, boxShadow: 1 }}
      columns={columns}
      rows={vms}
      getRowId={(row: Vm) => row.metadata.id}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 25, 50]}
      checkboxSelection
      autoHeight
    />
  );
};
