import styled from 'styled-components';

export const Card = styled.div`
  background-color: #282a36;
  border-radius: 0.5rem;
  height: 30rem;
  display: flex;
`;

export const LeftBox = styled.div`
  flex: 4;
  width: 40%;
  height: 100%;
  position: relative;
  p {
    position: absolute;
    color: white;
    margin: 5px;
    font-size: 2.5rem;
    top: 0;
    left: 0;
  }
`;

export const RightBox = styled.div`
  flex: 6;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const ImageStyle = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border: 1px solid #000000;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
