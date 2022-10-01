import { Box } from '@mui/material';
import { ReactNode } from 'react';

export const InstanceCardContent = ({ children }: { children: ReactNode }) => (
  <Box height="100%" sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
    {children}
  </Box>
);
