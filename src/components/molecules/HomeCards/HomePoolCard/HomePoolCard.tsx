import { Card, LeftBox, LeftBoxTitle, LeftBoxInfo, LeftBoxFooter } from '../Styles/Card';
import { PoolInfoCentering, PoolBlock, PoolInfo } from './Styles/main';
import { H1, H3, H4 } from '@components/atoms/Heading';
import Image from '@static/pool-image.jpg';

export const HomePoolCard = () => {
  const location: string = 'var/lib/libvirt/images';
  const free: number = 48;
  const volumes: number = 2;
  const size: number = 64;
  const active: string = 'Active';

  return (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Pool</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <PoolInfoCentering>
            <H1>Default</H1>
            <p>Size: {size}GiB</p>
            <p>State: {active}</p>
          </PoolInfoCentering>
        </LeftBoxInfo>
        <LeftBoxFooter />
      </LeftBox>

      <PoolBlock>
        <PoolInfo>
          <H4>Location: {location}</H4>
          <H4>Free: {free} GiB</H4>
          <H4>Volumes: {volumes}</H4>
        </PoolInfo>
      </PoolBlock>
    </Card>
  );
};
