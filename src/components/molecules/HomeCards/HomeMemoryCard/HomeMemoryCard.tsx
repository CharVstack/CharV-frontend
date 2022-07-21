import { Card, LeftBox, RightBox, GraphInfo, LeftBoxTitle, LeftBoxInfo, LeftBoxFooter } from '../Styles/Card';
import Image from '@static/memory-image.jpg';
import { H1, H3 } from '@components/atoms/Heading';
import { Memory } from '@api-hooks/v1/@types';
import { DoughnutGraph } from '@components/atoms/DoughnutGraph';

type Props = {
  Memory: Memory;
};

export const HomeMemoryCard = ({ Memory }: Props) => {
  const usedMemory = Memory.used;
  const totalMemory = Memory.total;

  if (usedMemory == undefined || totalMemory == undefined) {
    return <p>Loading</p>;
  }

  return (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Memory</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <H1>{totalMemory}</H1>
          <p>GB</p>
        </LeftBoxInfo>
        <LeftBoxFooter />
      </LeftBox>

      <RightBox>
        <div>
          <DoughnutGraph Label1={'Free'} Label2={'Used'} Data1={totalMemory - usedMemory} Data2={usedMemory} />
          <GraphInfo>
            <p>Used: {usedMemory}GB</p>
          </GraphInfo>
        </div>
      </RightBox>
    </Card>
  );
};
