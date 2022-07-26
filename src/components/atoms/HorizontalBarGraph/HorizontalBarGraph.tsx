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
        indexAxis: 'y' as const,
        data: [CPUMetrics, MemoryMetrics, StorageMetrics],
        backgroundColor: ['#00A056'],
        borderWidth: 0,
      },
    ],
  };

  const option: ChartOptions<'bar'> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {},
  };

  return <Bar data={data} options={option} />;
};
