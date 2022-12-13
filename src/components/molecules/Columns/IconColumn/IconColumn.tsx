import { Box, Stack, useTheme } from '@mui/material';

import { HookErrorDialog } from '@components/organisms/Dialogs/HookError/HookErrorDialog';

export const IconColumn = ({ icon, text, error }: { icon: JSX.Element; text: string; error: Error | undefined }) => {
  const { spacing } = useTheme();

  if (error) {
    return (
      <Stack>
        <HookErrorDialog message="Could not retrieve VM power information" />
        <Stack direction="row" alignItems="center" spacing={spacing(1)}>
          {icon}
          <Box>{text}</Box>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack direction="row" alignItems="center" spacing={spacing(1)}>
      {icon}
      <Box>{text}</Box>
    </Stack>
  );
};
