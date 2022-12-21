import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useTheme } from '@mui/material';
import { GridRowId } from '@mui/x-data-grid/models/gridRows';

import { IconColumn } from '@components/molecules/Columns';
import { useVmPowerByVmId } from '@hooks/api/v1';

export const StatusColumn = ({ rowId }: { rowId: GridRowId }) => {
  const { data } = useVmPowerByVmId(rowId.toString());

  const status = data?.vm_power.state ?? 'UNKNOWN';
  const { palette } = useTheme();

  const icon = (() => {
    switch (status) {
      case 'RUNNING':
        return <CheckCircleOutlineIcon sx={{ color: palette.success.main }} />;
      case 'SHUTDOWN':
        return <PowerSettingsNewIcon sx={{ color: palette.action.disabled }} />;
      default:
        // 'UNKNOWN'
        return <ErrorIcon sx={{ color: palette.error.main }} />;
    }
  })();

  return <IconColumn icon={icon} text={status} />;
};
