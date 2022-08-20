import { Memory } from '@api-hooks/v1/@types';
import { ClacUnitSize } from '@components/atoms/CalcUnitSize';
import { DoughnutGraph } from '@components/atoms/DoughnutGraph';
import { H1, H3 } from '@components/atoms/Heading';
import Image from '@static/memory-image.jpg';

import { Card, LeftBox, RightBox, GraphInfo, LeftBoxTitle, LeftBoxInfo, LeftBoxFooter } from '../Styles/Card';

export const HomeMemoryCard = ({ MemoryMetrics }: { MemoryMetrics: Memory }) =>
  MemoryMetrics.used === undefined || MemoryMetrics.total === undefined ? (
    <p>Loading</p>
  ) : (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Memory</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <H1>{ClacUnitSize(MemoryMetrics.total).calculatedSize.toFixed(2)}</H1>
          <p>{ClacUnitSize(MemoryMetrics.total).unit}</p>
        </LeftBoxInfo>
        <LeftBoxFooter />
      </LeftBox>

      <RightBox>
        <div>
          <DoughnutGraph
            Label1="Free"
            Label2="Used"
            Data1={parseFloat(
              (
                ClacUnitSize(MemoryMetrics.total).calculatedSize - ClacUnitSize(MemoryMetrics.used).calculatedSize
              ).toFixed(2)
            )}
            Data2={parseFloat(ClacUnitSize(MemoryMetrics.total).calculatedSize.toFixed(2))}
          />
          <GraphInfo>
            <p>
              Used: {ClacUnitSize(MemoryMetrics.used).calculatedSize.toFixed(2)}
              {ClacUnitSize(MemoryMetrics.used).unit}
            </p>
          </GraphInfo>
        </div>
      </RightBox>
    </Card>
  );
