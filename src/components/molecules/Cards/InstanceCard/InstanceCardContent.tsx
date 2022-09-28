import { Box } from '@mui/material';
import { ReactNode } from 'react';

export const InstanceCardContent = ({ children }: { children: ReactNode }) => (
  <Box sx={{ height: '100%' }}>{children}</Box>
);
