import styled from 'styled-components';

export const Card = styled.div`
  background-color: #282a36;
  border-radius: 0.5rem;
  height: 30rem;
  display: flex;
`;

export const LeftBox = styled.div<{ image: string }>`
  flex: 4;
  width: 40%;
  height: 100%;
  display: flex;
  background-color: black;
  flex-direction: column;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: bottom;
  border-radius: 0.5rem 0 0 0.5rem;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 0.5;
  }
`;

export const LeftBoxTitle = styled.div`
  height: 10%;
  width: 100%;
  flex: 1;
  display: flex;
  z-index: 1;
`;

export const LeftBoxInfo = styled.div`
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 10;
  display: flex;
  z-index: 1;
`;

export const LeftBoxFooter = styled.div`
  height: 10%;
  width: 100%;

  flex: 1;
  display: flex;
`;

export const RightBox = styled.div`
  flex: 6;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GraphInfo = styled.div`
  justify-content: center;
  display: flex;
`;
