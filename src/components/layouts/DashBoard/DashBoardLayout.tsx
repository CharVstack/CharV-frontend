import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { NavBar } from '@components/organisms/Bars';

export const DashBoardLayout = ({ children }: { children: ReactNode }) => (
  <>
    <NavBar />
    <Box sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>{children}</Box>
  </>
);
