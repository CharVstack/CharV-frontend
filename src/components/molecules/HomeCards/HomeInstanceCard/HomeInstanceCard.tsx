import { Card, LeftBox, RightBox, ImageStyle } from '../Styles/Card';
import { H3 } from '@components/atoms/Heading';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

import Image from '@static/host-image.jpg';

const StyledCircularBar = styled(CircularProgress)`
  position: absolute;
`;

export const HomeInstanceCard = () => {
  return (
    <Card>
      <LeftBox>
        <ImageStyle src={Image} alt="Instance Image" />
      </LeftBox>

      <RightBox>
        <StyledCircularBar variant="determinate" size={96} value={80} color="secondary" />
        <H3>Instance</H3>
      </RightBox>
    </Card>
  );
};
