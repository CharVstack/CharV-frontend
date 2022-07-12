import { Card, LeftBox, RightBox, ImageStyle } from '../Styles/Card';
//import { H3 } from '@components/atoms/Heading';
import Image from '@static/pool-image.jpg';

export const HomePoolCard = () => {
  return (
    <Card>
      <LeftBox>
        <ImageStyle src={Image} alt="Memory Image" />
        <p>Pool</p>
      </LeftBox>

      <RightBox></RightBox>
    </Card>
  );
};
