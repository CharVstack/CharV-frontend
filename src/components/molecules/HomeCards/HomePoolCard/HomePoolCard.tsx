import {
  Card,
  LeftBox,
  PoolInfoCentering,
  PoolBlock,
  PoolInfo,
  LeftBoxTitle,
  LeftBoxInfo,
  LeftBoxFooter,
} from '../Styles/Card';
import { H1, H3, H4 } from '@components/atoms/Heading';
import Image from '@static/pool-image.jpg';

export const HomePoolCard = () => {
  const location: string = 'var/lib/libvirt/images';
  const free: number = 48;
  const volumes: number = 2;

  return (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Pool</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <PoolInfoCentering>
            <H1>Default</H1>
            <p>Size: 64GiB</p>
            <p>State: Active</p>
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
