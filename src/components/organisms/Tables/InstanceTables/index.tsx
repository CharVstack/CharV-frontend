import useAspidaSWR from '@aspida/swr';
import { Stack } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { GridRowId } from '@mui/x-data-grid/models/gridRows';
import React, { useState } from 'react';

import { Vm } from '@api-hooks/v1/@types';
import { StatusColumn } from '@components/molecules/Columns';
import { apiClient } from '@lib/apiClient';

const BuildStatusColumn = (rowId: GridRowId) => {
  const { data } = useAspidaSWR(apiClient.api.v1.vms._vmId(rowId as string).power);
  return StatusColumn(data?.vm_power.state ?? 'UNKNOWN');
};

const Columns = () => {
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'VM', flex: 2 },
    {
      field: 'status',
      headerName: 'Status',
      flex: 1,
      renderCell: (params: GridCellParams<string, Vm>) => BuildStatusColumn(params.id),
    },
  ];
  return columns;
};

export const InstanceTables = () => {
  const { data } = useAspidaSWR(apiClient.api.v1.vms);
  const columns = Columns();
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
