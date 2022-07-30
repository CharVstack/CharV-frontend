import 'chart.js/auto';
import { ChartOptions, ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

type Props = {
  CPUMetrics: number;
  MemoryMetrics: number;
  StorageMetrics: number;
};

export const HorizontalBarGraph = ({ CPUMetrics, MemoryMetrics, StorageMetrics }: Props) => {
  const data: ChartData<'bar'> = {
    labels: ['CPU', 'Memory', 'Storage'],

    datasets: [
      {
        data: [CPUMetrics, MemoryMetrics, StorageMetrics],
        backgroundColor: ['#00A056'],
        barPercentage: 0.4,
        categoryPercentage: 0.8,
      },
    ],
  };

  const option: ChartOptions<'bar'> = {
    indexAxis: 'y',
    scales: {
      xAxes: {
        display: false,
      },
      yAxes: {
        display: true,
        ticks: {
          font: {
            size: 24,
          },
          color: '#DBDBDB',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Bar data={data} options={option} />;
};
