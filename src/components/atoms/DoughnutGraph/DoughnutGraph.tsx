import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

type Props = {
  Label1: string;
  Label2: string;
  Data1: number;
  Data2: number;
};

export const DoughnutGraph = ({ Label1, Label2, Data1, Data2 }: Props) => {
  const data = {
    labels: [Label1, Label2],
    datasets: [
      {
        label: 'Dataset',
        data: [Data1, Data2],
        backgroundColor: ['#00A056', '#717375'],
        borderColor: ['#00A056', '#717375'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};
