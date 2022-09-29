import 'chart.js/auto';
import { useTheme } from '@mui/material';
import { ChartOptions, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Charts } from '../types/types';

export const BarChart = ({ data }: { data: Charts }) => {
  const theme = useTheme();
  const defaultColor: string = theme.palette.success.main;

  const chartData: ChartData<'bar'> = {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data).map((i) => i.value),
        backgroundColor: Object.values(data).map((x) => x.color ?? defaultColor),
        barPercentage: 0.6,
        categoryPercentage: 0.8,
      },
    ],
  };

  const chartOptions: ChartOptions<'bar'> = {
    indexAxis: 'y',
    scales: {
      xAxes: {
        display: false,
        max: 100,
        min: 0,
      },
      yAxes: {
        display: true,
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
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
};
