import { Typography } from '@mui/material';
import { DataGrid, GridCellParams, GridColumns } from '@mui/x-data-grid';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Vm } from '@api-hooks/v1/@types';
import { useAllVms } from '@aspida/v1';
import { LoadingSpinner } from '@components/molecules/Progress';
import { StatusColumn } from '@components/organisms/Columns';
import { HookErrorDialog } from '@components/organisms/Dialogs';
import { VmActionMenu, useSelectedVmWritableAtom } from '@components/organisms/Menu';

export const InstanceTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error } = useAllVms();
  const [pageSize, setPageSize] = useState(10);
  const [selectedVm, setSelectedVm] = useSelectedVmWritableAtom();

  const columns: GridColumns = useMemo(
    () => [
      {
        field: 'name',
        renderHeader: () => <Typography>VM</Typography>,
        sortable: false,
        hideable: false,
        flex: 1,
        renderCell: (params: GridCellParams<string, Vm>) => (
          <Link style={{ textDecoration: 'none' }} to={`/vms/${params.id.toString()}`}>
            <Typography sx={{ color: (theme) => theme.palette.text.primary }}>{params.value}</Typography>
          </Link>
        ),
      },
      {
        field: 'status',
        renderHeader: () => <Typography>Status</Typography>,
        filterable: false,
        sortable: false,
        hideable: false,
        flex: 0.3,
        renderCell: (params: GridCellParams<string, Vm>) => <StatusColumn rowId={params.id} />,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        headerAlign: 'center',
        align: 'center',
        renderHeader: () => <Typography>Actions</Typography>,
        sortable: false,
        hideable: false,
        filterable: false,
        renderCell: (params: GridCellParams<string, Vm>) => <VmActionMenu vmId={params.id.toString()} />,
      },
    ],
    []
  );

  if (data === undefined) {
    if (error) {
      return <HookErrorDialog title="Error" message="Could not retrieve VM information" />;
    }
    return <LoadingSpinner open />;
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          sx={{ backgroundColor: (theme) => theme.palette.grey[900], boxShadow: 1 }}
          columns={columns}
          rows={data.vms}
          getRowId={(row: Vm) => row.metadata.id}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
          autoHeight
          disableSelectionOnClick
          hideFooter
          onSelectionModelChange={(selected) => {
            setSelectedVm(selected.map((v) => v.toString()));
          }}
          selectionModel={selectedVm}
        />
      </div>
    </div>
  );
};
