import { TableBody, Table, TableContainer, Paper, TableHead, TableRow, TableCell, Typography } from '@mui/material';

import { Vm } from '@api-hooks/v1/@types';
import { StatusColumn } from '@components/organisms/Columns';

type Props = {
  vm: Vm;
};

export const VMDetailTable = ({ vm }: Props) => (
  <TableContainer component={Paper} sx={{ width: 'auto', height: 'auto' }}>
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell width="30%">
            <Typography>Property</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Typography>Value</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell width="30%">
            <Typography>Name</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Typography>{vm.name}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell width="30%">
            <Typography>Status</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <StatusColumn rowId={vm.metadata.id} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell width="30%">
            <Typography>CPU (Core)</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Typography>{vm.cpu}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell width="30%">
            <Typography>Memory</Typography>
          </TableCell>
          <TableCell colSpan={3}>
            <Typography>
              {vm.memory}
              MB
            </Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
);
