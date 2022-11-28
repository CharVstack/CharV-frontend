import { Box, Stack } from '@mui/material';
import React from 'react';

export const IconColumn = (icon: JSX.Element, text: string) => (
  <Stack direction="row">
    {icon}
    <Box sx={{ ml: 1 }}>{text}</Box>
  </Stack>
);
