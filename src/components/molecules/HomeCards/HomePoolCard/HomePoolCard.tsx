import { H1, H3, H4 } from '@components/atoms/Heading';
import Image from '@static/pool-image.jpg';

import { Card, LeftBox, LeftBoxTitle, LeftBoxInfo, LeftBoxFooter } from '../Styles/Card';

import { PoolInfoCentering, PoolBlock, PoolInfo } from './Styles/main';

export const HomePoolCard = () => {
  const location = 'var/lib/libvirt/images';
  const free = 48;
  const volumes = 2;
  const size = 64;
  const active = 'Active';

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
