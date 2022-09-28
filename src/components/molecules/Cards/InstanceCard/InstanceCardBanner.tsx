import { Box, CardMedia } from '@mui/material';
import { ReactNode } from 'react';

export const InstanceCardBanner = ({ children, bgImg }: { children: ReactNode; bgImg?: string }) => (
  <Box sx={{ position: 'relative', height: '100%' }}>
    {(
      <CardMedia
        component="img"
        image={bgImg}
        sx={{
          height: '100%',
          filter: 'blur(2px) brightness(50%)',
          objectFit: 'cover',
        }}
      />
    ) ?? bgImg}
    <Box
      zIndex={400}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </Box>
  </Box>
);
