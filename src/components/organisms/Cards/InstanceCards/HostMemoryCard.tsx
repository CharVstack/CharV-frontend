import { Grid, Typography, useTheme } from '@mui/material';

import bgImg from '@assets/images/memory-image.jpg';
import { Card, CardContentBox, CardAsideContentBox } from '@components/molecules/Card';
import { Charts, DoughnutChart, DoughnutChartProps } from '@components/molecules/Charts';
import { LoadingSpinner } from '@components/molecules/Progress';
import { useHost } from '@hooks/api/v1';
import { calcUnitSize } from '@utils/CalcUnitSize';

export const HostMemoryCard = () => {
  const { data } = useHost();
  const theme = useTheme();
  const freeVmsColor: string = theme.palette.grey['800'];
  if (data === undefined) {
    return <LoadingSpinner open />;
  }

  const {
    host: {
      memory: { total: totalMemorySize, used: usedMemorySize },
    },
  } = data;

  if (totalMemorySize === undefined || usedMemorySize === undefined) {
    return <LoadingSpinner open />;
  }

  const hostMemoryData: Charts = {
    Used: { value: usedMemorySize },
    Free: { value: totalMemorySize - usedMemorySize, color: freeVmsColor },
  };

  const chartOptions: DoughnutChartProps['options'] = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const [unit, memorySize] = calcUnitSize(context.parsed, 4);
            return `${memorySize} ${unit}`;
          },
        },
      },
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  const [unit, memorySize] = calcUnitSize(totalMemorySize);

  return (
    <Card hasAsideContent title="Memory">
      <CardAsideContentBox bgImg={bgImg}>
        <Grid container justifyContent="center" alignItems="flex-end">
          <Grid item>
            <Typography variant="h3" component="div">
              {memorySize}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{unit}</Typography>
          </Grid>
        </Grid>
      </CardAsideContentBox>
      <CardContentBox>
        <DoughnutChart options={chartOptions} data={hostMemoryData} />
      </CardContentBox>
    </Card>
  );
};
