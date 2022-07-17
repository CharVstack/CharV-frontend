import {
  Card,
  LeftBox,
  RightBox,
  ImageStyle,
  GraphInfo,
  LeftBoxTitle,
  LeftBoxInfo,
  LeftBoxFooter,
} from '../Styles/Card';
//import { H3 } from '@components/atoms/Heading';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import Image from '@static/memory-image.jpg';
import { H1, H3 } from '@components/atoms/Heading';

export const HomeMemoryCard = () => {
  const used: number = 46;
  const total: number = 74;

  return (
    <Card>
      <LeftBox image={Image}>
        <LeftBoxTitle>
          <H3>Memory</H3>
        </LeftBoxTitle>
        <LeftBoxInfo>
          <H1>{total}</H1>
          <p>GB</p>
        </LeftBoxInfo>
        <LeftBoxFooter />
      </LeftBox>

      <RightBox>
        <div>
          <CircularProgress variant="determinate" size={136} value={70} color="secondary" />
          <GraphInfo>
            <p>Used: {used}GB</p>
          </GraphInfo>
        </div>
      </RightBox>
    </Card>
  );
};
