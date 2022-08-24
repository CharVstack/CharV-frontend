import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d87274',
      light: '#ffa2a3',
      dark: '#a34449',
    },
    secondary: {
      main: '#00A056',
    },
    background: {
      default: '#000000',
    },
    text: { primary: '#ffffff' },
  },
});
