import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme } from '../src/utils/theme'
import { HANDLERS } from '../src/lib/msw/handlers'
import { mswDecorator, initialize } from 'msw-storybook-addon'

initialize()

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
  mswDecorator
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: Object.values(HANDLERS).map((handlers) => handlers.success)
  }
};
