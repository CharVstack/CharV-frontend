import { Box, CardMedia, useTheme } from '@mui/material';
import { ReactNode } from 'react';

export const InstanceCardBanner = ({ children, bgImg }: { children: ReactNode; bgImg?: string }) => {
  const theme = useTheme();
  const textColor: string = theme.palette.common.white;

  return (
    <Box sx={{ position: 'relative', height: '100%', color: textColor }}>
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
};
