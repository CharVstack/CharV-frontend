import { ThemeProvider, CssBaseline } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '../src/utils/theme';
import { HANDLERS } from '../src/lib/msw/handlers';
import { mswDecorator, initialize } from 'msw-storybook-addon';
import { withScreenshot } from 'storycap';

const prefix = import.meta.env.VITE_STORYBOOK_PREFIX;

if (import.meta.env.MODE !== 'test') {
  initialize({
    serviceWorker:
      prefix !== undefined
        ? {
            url: `/${prefix}mockServiceWorker.js`,
          }
        : {},
  });
}

export const decorators = [
  (Story) => {
    return (
      <MemoryRouter>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </MemoryRouter>
    );
  },
  mswDecorator,
  withScreenshot,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: Object.values(HANDLERS).map((handlers) => handlers.success),
  },
};
