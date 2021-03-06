import { ThemeProvider } from '@mui/material'
import { darkTheme } from '../src/utils/theme'

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={darkTheme}>
        <Story />
      </ThemeProvider>
    );
  }
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
