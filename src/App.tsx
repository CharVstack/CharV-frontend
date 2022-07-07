import { RouteObject, useRoutes } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';

import { NavBar } from '@components/molecules/NavBar';
import { NotFound } from '@components/pages/ErrorPages';
import { Home } from '@components/pages/Home';
import { Instances } from '@components/pages/Instances';
import { lightTheme } from '@utils/theme';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  { path: 'instances', element: <Instances /> },
  { path: '*', element: <NotFound /> },
];

export const App = () => {
  const element = useRoutes(routes);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <NavBar />
      <Box component="div" sx={{ pt: '2rem', pb: '2rem', pr: '6rem', pl: '6rem' }}>
        {element}
      </Box>
    </ThemeProvider>
  );
};
