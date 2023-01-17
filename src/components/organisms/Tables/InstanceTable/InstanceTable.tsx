import { useTheme } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { atom, useSetAtom, useAtomValue, useAtom } from 'jotai';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Vm } from '@api-hooks/v1/@types';
import { LoadingSpinner } from '@components/molecules/Progress';
import { StatusColumn } from '@components/organisms/Columns';
import { HookErrorDialog } from '@components/organisms/Dialogs';
import { VmActionMenu } from '@components/organisms/Menu';
import { useAllVms } from '@hooks/api/v1';

const baseAtom = atom<string[]>([]);

const selectedVmAtom = atom<string[], string[]>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);

const resetSelectedVmAtom = atom(null, (_get, set) => set(baseAtom, []));

export const useSelectedVmWritableAtom = () => useAtom(selectedVmAtom);
export const useSelectedVmReadOnlyAtom = () => useAtomValue(selectedVmAtom);
export const useSelectedVmWriteOnlyAtom = () => useSetAtom(selectedVmAtom);
export const useResetSelectedVmAtom = () => useSetAtom(resetSelectedVmAtom);

export const InstanceTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error } = useAllVms();
  const [pageSize, setPageSize] = useState(10);
  const [selectedVm, setSelectedVm] = useSelectedVmWritableAtom();

  const {
    palette: {
      grey: { '900': bgColor },
      common: { white: fgColor },
    },
  } = useTheme();

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'VM',
        minWidth: 288,
        flex: 1,
        sortable: false,
        hideable: false,
        renderCell: (params: GridCellParams<string, Vm>) => (
          <Link style={{ textDecoration: 'none', color: fgColor }} to={`/vms/${params.id.toString()}`}>
            {params.value}
          </Link>
        ),
      },
      {
        field: 'status',
        headerName: 'Status',
        width: 192,
        filterable: false,
        sortable: false,
        hideable: false,
        renderCell: (params: GridCellParams<string, Vm>) => <StatusColumn rowId={params.id} />,
      },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        hideable: false,
        filterable: false,
        renderCell: (params: GridCellParams<string, Vm>) => <VmActionMenu vm={params.id.toString()} />,
      },
    ],
    [fgColor]
  );

  if (data === undefined) {
    if (error) {
      return <HookErrorDialog title="Error" message="Could not retrieve VM information" />;
    }
    return <LoadingSpinner open />;
  }

  return (
    <DataGrid
      sx={{ backgroundColor: bgColor, boxShadow: 1 }}
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
  );
};
