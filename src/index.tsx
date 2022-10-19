import { SnackbarProvider } from 'notistack';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <SnackbarProvider maxSnack={4}>
      <App />
    </SnackbarProvider>
  </StrictMode>
);
