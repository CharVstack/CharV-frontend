import { Box, Stack } from '@mui/material';
import Card from '@mui/material/Card';

import { InstanceCardUnion } from '@components/molecules/Cards';

import { InstanceCardTitle } from './InstanceCardTitle';

export const InstanceCard = (props: InstanceCardUnion) => {
  const { hasAsideContent, title, children } = props;
  return (
    <Card>
      <InstanceCardTitle title={title} />
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
    </Card>
  );
};
