import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

import { Head } from '@components/atoms/Head';

import App from './App';

const rootElement = document.getElementById('root') as Element;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <HelmetProvider>
      <Head />
      <App />
    </HelmetProvider>
  </StrictMode>
);
