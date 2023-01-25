import { createElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { MemoryRouter } from 'react-router-dom';
import { darkTheme } from '../src/styles';
import { HANDLERS } from '../src/lib/msw/handlers';
import { mswDecorator, initialize } from 'msw-storybook-addon';
import { withScreenshot } from 'storycap';
import 'storycap/register';

if (import.meta.env.MODE !== 'test') {
  initialize();
}

export const decorators = [
  (Story) => {
    return createElement(
      MemoryRouter,
      null,
      createElement(
        ThemeProvider,
        {
          theme: darkTheme,
        },
        createElement(CssBaseline),
        createElement(Story)
      )
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
