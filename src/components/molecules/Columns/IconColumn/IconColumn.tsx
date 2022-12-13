import { Box, Stack, useTheme } from '@mui/material';

export const IconColumn = ({ icon, text }: { icon: JSX.Element; text: string }) => {
  const { spacing } = useTheme();

  return (
    <Stack direction="row" alignItems="center" spacing={spacing(1)}>
      {icon}
      <Box>{text}</Box>
    </Stack>
  );
};
