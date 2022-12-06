import { useTheme } from '@mui/material';
import { ChartOptions } from 'chart.js';

import { Card, CardContentBox } from '@components/molecules/Card';
import { BarChart, Charts } from '@components/molecules/Charts';

type Props = {
  cpuUsageRate: number;
  memoryUsageRate: number;
  storageUsageRate: number;
};

export const HostStatusCard = ({ cpuUsageRate, memoryUsageRate, storageUsageRate }: Props) => {
  const theme = useTheme();
  const hostData: Charts = {
    CPU: { value: cpuUsageRate },
    Memory: { value: memoryUsageRate },
    Storage: { value: storageUsageRate },
  };

  const options: ChartOptions<'bar'> = {
    indexAxis: 'y',
    scales: {
      xAxes: {
        display: false,
        max: 100,
        min: 0,
      },
      yAxes: {
        display: false,
        ticks: {
          font: {
            size: theme.typography.fontSize,
          },
          color: theme.palette.text.primary,
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => Intl.NumberFormat([], { style: 'unit', unit: 'percent' }).format(context.parsed.x),
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card title="Host">
      <CardContentBox>
        <BarChart options={options} data={hostData} />
      </CardContentBox>
    </Card>
  );
};
