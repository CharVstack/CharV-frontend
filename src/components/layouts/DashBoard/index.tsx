import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { NavBar } from '@components/organisms/Bars';

export const DashBoardLayout = ({ children }: { children: ReactNode }) => (
  <>
    <NavBar />
    <Box sx={{ pt: 4, pb: 4 }}>{children}</Box>
  </>
);
