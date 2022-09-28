import { Typography } from '@mui/material';
import { ReactNode } from 'react';

type HeadingProps = {
  children: ReactNode;
};

export const H1 = ({ children }: HeadingProps) => (
  <Typography variant="h1" component="h1">
    {children}
  </Typography>
);

export const H2 = ({ children }: HeadingProps) => (
  <Typography variant="h2" component="h2">
    {children}
  </Typography>
);

export const H3 = ({ children }: HeadingProps) => (
  <Typography variant="h3" component="h3">
    {children}
  </Typography>
);

export const H4 = ({ children }: HeadingProps) => (
  <Typography variant="h4" component="h4">
    {children}
  </Typography>
);

export const H5 = ({ children }: HeadingProps) => (
  <Typography variant="h5" component="h5">
    {children}
  </Typography>
);

export const H6 = ({ children }: HeadingProps) => (
  <Typography variant="h6" component="h6">
    {children}
  </Typography>
);
