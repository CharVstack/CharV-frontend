import { Box, Stack } from '@mui/material';
import MUICard from '@mui/material/Card';

import { CardProps } from './CardProps';
import { CardTitle } from './CardTitle';

export const Card = ({ hasAsideContent, title, children }: CardProps) => (
  <MUICard>
    <CardTitle title={title} />
    <Box sx={{ aspectRatio: '8/5' }}>
      {hasAsideContent ? (
        <Stack direction="row" height="100%" width="100%">
          {/* aside content */}
          <Box width="40%">{children[0]}</Box>
          {/* main content */}
          <Box width="60%">{children[1]}</Box>
        </Stack>
      ) : (
        <Box height="100%" width="100%">
          {children}
        </Box>
      )}
    </Box>
  </MUICard>
);
