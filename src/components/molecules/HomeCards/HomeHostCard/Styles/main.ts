import styled from 'styled-components';

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
  H3 {
    padding: 1rem 0 0 1rem;
  }
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
