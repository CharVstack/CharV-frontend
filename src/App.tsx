import { Box } from '@mui/material';
import { RouteObject, useRoutes } from 'react-router-dom';

import { NavBar } from '@components/molecules/NavBar';
import { NotFound } from '@components/pages/ErrorPages';
import { Home } from '@components/pages/Home';
import { Instances } from '@components/pages/Instances';

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
    <>
      <NavBar />
      <Box component="div" sx={{ padding: '2rem' }}>
        {element}
      </Box>
    </>
  );
};
