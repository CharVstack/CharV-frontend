import { Card } from '../Styles/Card';
import { H3 } from '@components/atoms/Heading';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

export const HomeHostCard = () => {
  return (
    <Card>
      <H3>Host</H3>
      <div>
        <LinearProgress variant="determinate" value={80} />
      </div>
    </Card>
  );
};
