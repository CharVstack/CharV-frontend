import { Card } from '../Styles/Card';
import { H3 } from '@components/atoms/Heading';
import { CircularProgress, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledCircularBar = styled(CircularProgress)`
  position: absolute;
`;

export const HomeMemoryCard = () => {
  return (
    <Card>
      <H3>Memory</H3>
      <div>
        <StyledCircularBar variant="determinate" size={96} value={80} color="secondary" />
      </div>
    </Card>
  );
};
