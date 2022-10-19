import { Global, css } from '@emotion/react';

const styles = css`
  body {
    margin: 0;
    padding: 0;
  }
`;

export const GlobalStyle = () => <Global styles={styles} />;
