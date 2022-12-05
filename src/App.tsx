import { CssBaseline } from '@mui/material';
import { Provider as JotaiProvider } from 'jotai';
import { useAtomsDebugValue, useAtomsDevtools } from 'jotai/devtools';
import { SnackbarProvider } from 'notistack';

import { GlobalStyle, Theme } from '@styles';
import { Routing } from '@utils/Routing';

const DevAtoms = () => {
  useAtomsDevtools('global');
  return null;
};

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

const App = () => (
  <JotaiProvider>
    <DebugAtoms />
    <DevAtoms />
    <SnackbarProvider maxSnack={4}>
      <Theme>
        <CssBaseline />
        <GlobalStyle />
        <Routing />
      </Theme>
    </SnackbarProvider>
  </JotaiProvider>
);

export default App;
