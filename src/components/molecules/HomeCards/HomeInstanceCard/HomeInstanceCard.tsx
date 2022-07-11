import { Card } from '../Styles/Card';
import { ImageStyle } from './styles/image';
import { H3 } from '@components/atoms/Heading';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';

//import Image from '@static/host-image.jpg';

const StyledCircularBar = styled(CircularProgress)`
  position: absolute;
`;

export const HomeInstanceCard = () => {
  return (
    <Card>
      <H3>Instance</H3>
      <div>
        <a href="#">
          <ImageStyle src={Image} alt="Instance Image" />
        </a>
      </div>
      <div>
        <StyledCircularBar variant="determinate" size={96} value={80} color="secondary" />
      </div>
    </Card>
  );
};
