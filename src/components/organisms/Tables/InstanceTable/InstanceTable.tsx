import { useTheme } from '@mui/material';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { atom, useSetAtom, useAtomValue } from 'jotai';
import { useState } from 'react';

import { Vm } from '@api-hooks/v1/@types';
import { StatusColumn } from '@components/organisms/Columns';

type Prop = {
  vms: Vm[];
};

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

export const InstanceTable = ({ vms }: Prop) => {
  const [pageSize, setPageSize] = useState(10);
  const setSelectedVm = useSelectedVmWriteOnlyAtom();

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
      onSelectionModelChange={(selected) => {
        setSelectedVm(selected.map((v) => v.toString()));
      }}
    />
  );
};
