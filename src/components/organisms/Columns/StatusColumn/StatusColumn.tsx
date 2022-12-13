import useAspidaSWR from '@aspida/swr';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useTheme } from '@mui/material';
import { GridRowId } from '@mui/x-data-grid/models/gridRows';
import { SWRResponse } from 'swr';

import { VmPowerInfo } from '@api-hooks/v1/@types';
import { IconColumn } from '@components/molecules/Columns';
import { apiClient } from '@lib/apiClient';

export const StatusColumn = ({ rowId }: { rowId: GridRowId }) => {
  const { data, error } = useAspidaSWR(apiClient.api.v1.vms._vmId(rowId as string).power) as SWRResponse<
    { vm_power: VmPowerInfo },
    Error
  >;
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

  return <IconColumn icon={icon} text={status} error={error} />;
};
