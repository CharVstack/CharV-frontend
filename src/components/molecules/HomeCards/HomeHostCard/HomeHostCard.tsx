import { Card } from '../Styles/Card';
import { H3 } from '@components/atoms/Heading';
import styled from 'styled-components';
import { CircularProgress, Typography } from '@mui/material';

const StyledCircularBar = styled(CircularProgress)`
  position: absolute;
`;

export const HomeHostCard = () => {
  return (
    <Card>
      <H3>Host</H3>
      <div>
        <StyledCircularBar variant="determinate" size={96} value={80} color="secondary" />
      </div>
    </Card>
  );
};
