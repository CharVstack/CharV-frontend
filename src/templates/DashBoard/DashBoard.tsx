import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

import { NavBar } from '@components/organisms/Bars';
import { SideBar } from '@components/organisms/Drawers';

export const DashBoard = ({ children }: { children: ReactNode }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <NavBar />
    <SideBar />
    <Container component="main" sx={{ marginY: '5vh' }}>
      {children}
    </Container>
  </Box>
);
