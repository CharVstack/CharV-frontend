import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { Box } from '@mui/material';

import { NavBar } from '@components/navBar';
import { Router } from '@components/router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles
      styles={{
        body: { margin: 0 },
      }}
    />
    <NavBar />
    <Box component="div" sx={{ padding: '2rem' }}>
      <Router />
    </Box>
  </ThemeProvider>
);
