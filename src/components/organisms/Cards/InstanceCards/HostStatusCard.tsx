import { useTheme } from '@mui/material';
import { ChartOptions } from 'chart.js';

import { useHost } from '@aspida/v1';
import { Card, CardContentBox } from '@components/molecules/Card';
import { BarChart, Charts } from '@components/molecules/Charts';
import { LoadingSpinner } from '@components/molecules/Progress';

export const HostStatusCard = () => {
  const { data } = useHost();
  const theme = useTheme();
  if (data === undefined) {
    return <LoadingSpinner open />;
  }
  const { host } = data;

  const cpuUsageRate = Math.ceil(host.cpu.percent);
  const memoryUsageRate = Math.ceil(host.memory.percent);
  let storageUsageRate = 0;
  if (host.storage_pools.length !== 0) {
    storageUsageRate = Math.ceil(
      host.storage_pools.reduce((sum, current) => ({ ...sum, used_size: sum.used_size + current.used_size }))
        .used_size /
        host.storage_pools.reduce((sum, current) => ({
          ...sum,
          total_size: sum.total_size + current.total_size,
        })).total_size
    );
  }

  const chartData: Charts = {
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
          title: (context) => context.map((item) => `${item.label} utilization`),
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
        <BarChart options={options} data={chartData} />
      </CardContentBox>
    </Card>
  );
};
