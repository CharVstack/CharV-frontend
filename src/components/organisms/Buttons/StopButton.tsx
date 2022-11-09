import { Button, ThemeProvider, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export const ButtonTest = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pb: 1 }}>
      <Stack direction="row" spacing={1}>
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="error">
            shutdown
          </Button>
          <Button variant="contained" color="success">
            Start
          </Button>
        </ThemeProvider>
      </Stack>
    </Box>
  );
};
