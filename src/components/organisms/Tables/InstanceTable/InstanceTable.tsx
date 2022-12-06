import useAspidaSWR from '@aspida/swr';
import { useTheme } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';

import { Vm } from '@api-hooks/v1/@types';
import { LoadingSpinner } from '@components/molecules/Progress';
import { StatusColumn } from '@components/organisms/Columns';
import { apiClient } from '@lib/apiClient';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'VM', minWidth: 288, flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    width: 192,
    renderCell: (params: GridCellParams<string, Vm>) => StatusColumn(params.id),
  },
];

export const InstanceTable = () => {
  const { data } = useAspidaSWR(apiClient.api.v1.vms);
  const [pageSize, setPageSize] = useState(10);

  const {
    palette: {
      grey: { '900': bgColor },
    },
  } = useTheme();

  if (data === undefined) {
    return <LoadingSpinner open />;
  }

  return (
    <DataGrid
      sx={{ backgroundColor: bgColor, boxShadow: 1 }}
      columns={columns}
      rows={data?.vms ?? []}
      getRowId={(row: Vm) => row.metadata.id}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 25, 50]}
      checkboxSelection
      autoHeight
    />
  );
};
