import useAspidaSWR from '@aspida/swr';
import { Stack } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import React, { useState } from 'react';

import { Vm } from '@api-hooks/v1/@types';
import { StatusColumn } from '@components/organisms/Columns';
import { apiClient } from '@lib/apiClient';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'VM', flex: 2 },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    renderCell: (params: GridCellParams<string, Vm>) => StatusColumn(params.id),
  },
];

export const InstanceTable = () => {
  const { data } = useAspidaSWR(apiClient.api.v1.vms);
  const [pageSize, setPageSize] = useState(10);

  return (
    <Stack m={5}>
      <DataGrid
        columns={columns}
        rows={data?.vms ?? []}
        getRowId={(row: Vm) => row.metadata.id}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 25, 50]}
        checkboxSelection
        autoHeight
      />
    </Stack>
  );
};
