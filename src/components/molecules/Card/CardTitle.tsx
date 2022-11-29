import { Box, CardHeader } from '@mui/material';

export const CardTitle = ({ title }: { title: string }) => (
  <Box zIndex={800} position="absolute">
    <CardHeader title={title} />
  </Box>
);
