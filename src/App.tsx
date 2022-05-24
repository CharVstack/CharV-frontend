import { RouteObject, useRoutes } from 'react-router-dom';
import { Box } from '@mui/material';

import { NavBar } from '@components/NavBar';
import { NotFound } from '@pages/ErrorPages';
import { Home } from '@pages/Home';
import { Instances } from '@pages/Instances';

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
