import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Box, Stack, useTheme } from '@mui/material';
import React from 'react';

import { VmPowerInfo } from '@api-hooks/v1/@types';

export const StatusColumn = (status: VmPowerInfo['state']) => {
  const { palette } = useTheme();

  const { icon, text } = (() => {
    switch (status) {
      case 'RUNNING':
        return {
          icon: <CheckCircleOutlineIcon sx={{ color: palette.success.main }} />,
          text: status,
        };
      case 'SHUTDOWN':
        return {
          icon: <PowerSettingsNewIcon sx={{ color: palette.action.disabled }} />,
          text: status,
        };
      default:
        return {
          icon: <ErrorIcon sx={{ color: palette.error.main }} />,
          text: 'UNKNOWN',
        };
    }
  })();

  return (
    <Stack direction="row">
      {icon}
      <Box sx={{ ml: 1 }}>{text}</Box>
    </Stack>
  );
};
