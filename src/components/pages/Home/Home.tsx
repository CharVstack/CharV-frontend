import { HomeInstanceCard } from '@components/molecules/HomeCards/HomeInstanceCard';
import { HomeHostCard } from '@components/molecules/HomeCards/HomeHostCard';
import { HomeMemoryCard } from '@components/molecules/HomeCards/HomeMemoryCard';
import { HomePoolCard } from '@components/molecules/HomeCards/HomePoolCard';
import { Grid } from '@mui/material';

export const Home = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <HomeInstanceCard />
        </Grid>
        <Grid item xs={6}>
          <HomeHostCard />
        </Grid>
        <Grid item xs={6}>
          <HomeMemoryCard />
        </Grid>
        <Grid item xs={6}>
          <HomePoolCard />
        </Grid>
      </Grid>
    </>
  );
};
