import { Card, LeftBox, RightBox, ImageStyle, GraphInfo } from '../Styles/Card';
//import { H3 } from '@components/atoms/Heading';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

import Image from '@static/host-image.jpg';

const StyledCircularBar = styled(CircularProgress)`
  margin-top: 35%;
  vertical-align: middle;
`;

export const HomeInstanceCard = () => {
  const running: number = 8;
  return (
    <Card>
      <LeftBox>
        <ImageStyle src={Image} alt="Instance Image" />
        <p>Instance</p>
      </LeftBox>

      <RightBox>
        <StyledCircularBar variant="determinate" size={136} value={70} color="secondary" />
        <GraphInfo>
          <p>Running: {running}</p>
        </GraphInfo>
      </RightBox>
    </Card>
  );
};
