import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);
