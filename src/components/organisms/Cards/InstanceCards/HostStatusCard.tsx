import { Card, CardContentBox } from '@components/molecules/Card';
import { BarChart, Charts } from '@components/molecules/Charts';

type Props = {
  cpuUsageRate: number;
  memoryUsageRate: number;
  storageUsageRate: number;
};

export const HostStatusCard = ({ cpuUsageRate, memoryUsageRate, storageUsageRate }: Props) => {
  const hostData: Charts = {
    CPU: { value: cpuUsageRate },
    Memory: { value: memoryUsageRate },
    Storage: { value: storageUsageRate },
  };

  return (
    <Card title="Host">
      <CardContentBox>
        <BarChart data={hostData} />
      </CardContentBox>
    </Card>
  );
};
