import { Grid } from '@mui/material';
import { ReactNode } from 'react';

import { InstanceCard, InstanceCardBanner, InstanceCardContent } from '@components/molecules/Cards';

type Props = {
  title: string;
  bannerContent: ReactNode;
  mainContent: ReactNode;
  bgImg?: string;
};

export const MediaCardContainer = ({ title, bannerContent, mainContent, bgImg }: Props) => (
  <InstanceCard title={title}>
    <Grid container>
      <Grid item xs={5}>
        <InstanceCardBanner bgImg={bgImg}>{bannerContent}</InstanceCardBanner>
      </Grid>
      <Grid item xs={7}>
        <InstanceCardContent>{mainContent}</InstanceCardContent>
      </Grid>
    </Grid>
  </InstanceCard>
);
