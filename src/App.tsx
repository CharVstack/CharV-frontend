import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import { GlobalStyle, Theme } from '@styles';
import { Routing } from '@utils/Routing';

const App = () => (
  <SnackbarProvider maxSnack={4}>
    <Theme>
      <CssBaseline />
      <GlobalStyle />
      <Routing />
    </Theme>
  </SnackbarProvider>
);

export default App;
