import { Card, HostFoot } from '../Styles/Card';
import { H3, H4 } from '@components/atoms/Heading';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { HostBlock, HostTitle, HostInfo, HostInfoString, HostInfoGraph } from '../Styles/Card';

export const HomeHostCard = () => {
  const CPU: number = 70;
  const Memory: number = 46;
  const Storage: number = 48;

  return (
    <Card>
      <HostBlock>
        <HostTitle>
          <H3>Host</H3>
        </HostTitle>

        <HostInfo>
          <HostInfoString>
            <Stack sx={{ width: '95%', color: 'grey.500' }} spacing={0}>
              <H4>CPU</H4>
              <H4>Memory</H4>
              <H4>Storage</H4>
            </Stack>
          </HostInfoString>

          <HostInfoGraph>
            <Stack sx={{ width: '95%', color: 'grey.500' }} spacing={4}>
              <LinearProgress variant="determinate" color={'secondary'} value={CPU} />
              <LinearProgress variant="determinate" color={'secondary'} value={Memory} />
              <LinearProgress variant="determinate" color={'secondary'} value={Storage} />
            </Stack>
          </HostInfoGraph>
        </HostInfo>

        <HostFoot></HostFoot>
      </HostBlock>

      <LinearProgress variant="determinate" value={80} />
    </Card>
  );
};
