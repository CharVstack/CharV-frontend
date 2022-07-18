import { Card, LeftBox, RightBox, GraphInfo, LeftBoxTitle, LeftBoxInfo, LeftBoxFooter } from '../Styles/Card';
import { H3, H1 } from '@components/atoms/Heading';
import { CircularProgress } from '@mui/material';

import Image from '@static/host-image.jpg';

export const HomeInstanceCard = () => {
  const running: number = 8;
  const total_vm: number = 12;

  return (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Instance</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <H1>{total_vm}</H1>
          <p>vm</p>
        </LeftBoxInfo>
        <LeftBoxFooter />
      </LeftBox>

      <RightBox>
        <div>
          <CircularProgress variant="determinate" size={136} value={70} color="secondary" />
          <GraphInfo>
            <p>Running: {running}</p>
          </GraphInfo>
        </div>
      </RightBox>
    </Card>
  );
};
