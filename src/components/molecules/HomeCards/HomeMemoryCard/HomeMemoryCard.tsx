import { Card, LeftBox, RightBox, ImageStyle } from '../Styles/Card';
//import { H3 } from '@components/atoms/Heading';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import Image from '@static/memory-image.jpg';

const StyledCircularBar = styled(CircularProgress)`
  margin-top: 35%;
  vertical-align: middle;
`;

export const HomeMemoryCard = () => {
  return (
    <Card>
      <LeftBox>
        <ImageStyle src={Image} alt="Memory Image" />
        <p>Memory</p>
      </LeftBox>

      <RightBox>
        <StyledCircularBar variant="determinate" size={136} value={70} color="secondary" />
        <p>aaaaaaaaaaaa</p>
      </RightBox>
    </Card>
  );
};
