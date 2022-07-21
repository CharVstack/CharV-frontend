import { Card, LeftBox, RightBox, GraphInfo, LeftBoxTitle, LeftBoxInfo, LeftBoxFooter } from '../Styles/Card';
import { H3, H1 } from '@components/atoms/Heading';
import { Vm } from '@api-hooks/v1/@types';
import { DoughnutGraph } from '@components/atoms/DoughnutGraph';
import Image from '@static/host-image.jpg';

type Props = {
  Vms: Vm[];
};

export const HomeInstanceCard = ({ Vms }: Props) => {
  const total = Vms.length;
  const running = 4;

  return (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Instance</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <H1>{total}</H1>
          <p>vm</p>
        </LeftBoxInfo>
        <LeftBoxFooter />
      </LeftBox>

      <RightBox>
        <div>
          <DoughnutGraph Label1={'Active'} Label2={'Deactive'} Data1={running} Data2={total - running} />
          <GraphInfo>
            <p>Running: {running}</p>
          </GraphInfo>
        </div>
      </RightBox>
    </Card>
  );
};
