import { Box, CardHeader } from '@mui/material';
import Card from '@mui/material/Card';
import { ReactNode } from 'react';

export const InstanceCard = ({ title, children }: { title: string; children: ReactNode }) => (
  <Card sx={{ aspectRatio: '8/5' }}>
    <Box zIndex={800} position="absolute">
      <CardHeader title={title} />
    </Box>
    <Box sx={{ height: '100%' }}>{children}</Box>
  </Card>
);
