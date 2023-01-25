import { Box, CardMedia } from '@mui/material';
import { ReactNode } from 'react';

export const CardAsideContentBox = ({ children, bgImg }: { children: ReactNode; bgImg?: string }) => (
  <Box height="100%" sx={{ position: 'relative', color: (theme) => theme.palette.text.primary }}>
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
        height: 'inherit',
      }}
    >
      <Box height="inherit" sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
        {children}
      </Box>
    </Box>
  </Box>
);
