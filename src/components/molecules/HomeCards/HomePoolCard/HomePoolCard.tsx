import { Card, LeftBox, ImageStyle, PoolBlock, PoolInfo } from '../Styles/Card';
import { H4 } from '@components/atoms/Heading';
import Image from '@static/pool-image.jpg';

export const HomePoolCard = () => {
  const location: string = 'var/lib/libvirt/images';
  const free: number = 48;
  const volumes: number = 2;

  return (
    <Card>
      <LeftBox>
        <ImageStyle src={Image} alt="Memory Image" />
        <p>Pool</p>
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
