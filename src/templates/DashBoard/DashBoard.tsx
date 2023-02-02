import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

import { NavBar } from '@components/organisms/Bars';
import { SideBar } from '@components/organisms/Drawers';

export const DashBoard = ({ children }: { children: ReactNode }) => (
  <Box>
    <NavBar />
    <SideBar />
    <Container component="main" sx={{ marginY: '5vh', ml: '198px', width: 'calc(100vw - 198px)' }}>
      {children}
    </Container>
  </Box>
);
