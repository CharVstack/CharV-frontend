import { Stack, useTheme } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { atom, useSetAtom, useAtomValue } from 'jotai';
import { useState } from 'react';

import { Vm } from '@api-hooks/v1/@types';
import { LoadingSpinner } from '@components/molecules/Progress';
import { StatusColumn } from '@components/organisms/Columns';
import { HookErrorDialog } from '@components/organisms/Dialogs';
import { useAllVms } from '@hooks/api/v1';

const baseAtom = atom<string[]>([]);

const selectedVmAtom = atom<string[], string[]>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);

export const useSelectedVmReadOnlyAtom = () => useAtomValue(selectedVmAtom);
export const useSelectedVmWriteOnlyAtom = () => useSetAtom(selectedVmAtom);

const columns: GridColDef[] = [
  { field: 'name', headerName: 'VM', minWidth: 288, flex: 1 },
  {
    field: 'status',
    headerName: 'Status',
    width: 192,
    renderCell: (params: GridCellParams<string, Vm>) => <StatusColumn rowId={params.id} />,
  },
];

export const InstanceTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, error } = useAllVms();
  const [pageSize, setPageSize] = useState(10);
  const setSelectedVm = useSelectedVmWriteOnlyAtom();

  const {
    palette: {
      grey: { '900': bgColor },
    },
  } = useTheme();

  if (data === undefined) {
    if (error) {
      return (
        <Stack>
          <HookErrorDialog message="Could not retrieve VM information" />
          <LoadingSpinner open />
        </Stack>
      );
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
      onSelectionModelChange={(selected) => {
        setSelectedVm(selected.map((v) => v.toString()));
      }}
    />
  );
};
