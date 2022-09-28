import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import GlobalStyle from '@styles/globalStyles';
import { Routing } from '@utils/Routing';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <GlobalStyle />
    <Routing />
  </ThemeProvider>
);

export default App;
