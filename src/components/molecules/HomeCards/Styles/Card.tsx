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
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 0.4;
  }
`;

export const LeftBoxTitle = styled.div`
  height: 10%;
  width: 100%;
  flex: 1;
  display: flex;
`;

export const LeftBoxInfo = styled.div`
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex: 10;
  display: flex;
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
  //text-align: center;
  display: flex;
  //display: flex;
  justify-content: center; /*左右中央揃え*/
  align-items: center; /*上下中央揃え*/
`;

export const ImageStyle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: 1px solid #000000;
  opacity: 0.7;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const HostBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const HostTitle = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

export const HostInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex: 10;
`;

export const HostInfoString = styled.div`
  flex: 3;
  width: 40%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HostInfoGraph = styled.div`
  flex: 10;
  width: 60%;

  display: flex;
  align-items: center;
`;

export const HostFoot = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex: 1;
`;

export const PoolBlock = styled.div`
  flex: 6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PoolInfo = styled.div`
  text-align: center;
`;

export const PoolInfoCentering = styled.div`
  text-align: center;
`;

export const GraphInfo = styled.div`
  justify-content: center;
  display: flex;
`;
