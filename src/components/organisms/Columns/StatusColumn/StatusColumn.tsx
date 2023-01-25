import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  Error as ErrorIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import { GridRowId } from '@mui/x-data-grid';

import { useVmPowerByVmId } from '@aspida/v1';

export const StatusColumn = ({ rowId }: { rowId: GridRowId }) => {
  const { data } = useVmPowerByVmId(rowId.toString());

  const status = data?.vm_power.state ?? 'UNKNOWN';

  switch (status) {
    case 'RUNNING':
      return (
        <Box display="flex" gap="0.5rem">
          <CheckCircleOutlineIcon sx={{ color: (theme) => theme.palette.success.main }} />
          <Typography>{status}</Typography>
        </Box>
      );
    case 'SHUTDOWN':
      return (
        <Box display="flex" gap="0.5rem">
          <PowerSettingsNewIcon sx={{ color: (theme) => theme.palette.action.disabled }} />;
          <Typography>{status}</Typography>
        </Box>
      );
    default:
      // 'UNKNOWN'
      return (
        <Box display="flex" gap="0.5rem">
          <ErrorIcon sx={{ color: (theme) => theme.palette.error.main }} />
          <Typography>{status}</Typography>
        </Box>
      );
  }
};
