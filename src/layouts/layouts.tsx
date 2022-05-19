import React from 'react';
import styled from 'styled-components';

import NavBar from './navBar/navBar';

export const Container = styled.div`
  padding: 2rem;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
}
