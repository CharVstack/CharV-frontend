import { Memory } from '@api-hooks/v1/@types';
import { ClacUnitSize } from '@components/atoms/CalcUnitSize';
import { DoughnutGraph } from '@components/atoms/DoughnutGraph';
import { H1, H3 } from '@components/atoms/Heading';
import Image from '@static/memory-image.jpg';

import { Card, LeftBox, RightBox, GraphInfo, LeftBoxTitle, LeftBoxInfo, LeftBoxFooter } from '../Styles/Card';

type Props = {
  MemoryMetrics: Memory;
};

type Ram = {
  calculatedSize: number;
  unit: string;
};

export const HomeMemoryCard = ({ MemoryMetrics }: Props) => {
  if (MemoryMetrics.used === undefined || MemoryMetrics.total === undefined) {
    return <p>Loading</p>;
  }

  const detailUsedRam: Ram = ClacUnitSize(MemoryMetrics.used);
  const detailTotalMemory: Ram = ClacUnitSize(MemoryMetrics.total);

  return (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Memory</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <H1>{detailTotalMemory.calculatedSize.toFixed(2)}</H1>
          <p>{detailTotalMemory.unit}</p>
        </LeftBoxInfo>
        <LeftBoxFooter />
      </LeftBox>

      <RightBox>
        <div>
          <DoughnutGraph
            Label1="Free"
            Label2="Used"
            Data1={parseFloat((detailTotalMemory.calculatedSize - detailUsedRam.calculatedSize).toFixed(2))}
            Data2={parseFloat(detailTotalMemory.calculatedSize.toFixed(2))}
          />
          <GraphInfo>
            <p>
              Used: {detailUsedRam.calculatedSize.toFixed(2)}
              {detailUsedRam.unit}
            </p>
          </GraphInfo>
        </div>
      </RightBox>
    </Card>
  );
};
