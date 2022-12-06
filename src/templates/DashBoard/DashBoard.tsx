import { Box } from '@mui/material';
import { ReactNode } from 'react';

import { NavBar } from '@components/organisms/Bars';
import { SideBar } from '@components/organisms/Drawers';

export const DashBoard = ({ children }: { children: ReactNode }) => (
  <>
    <NavBar />
    <SideBar />
    <Box sx={{ pt: 4, pb: 4 }}>{children}</Box>
  </>
);
