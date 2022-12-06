import { CssBaseline } from '@mui/material';
import { Provider as JotaiProvider } from 'jotai';
import { useAtomsDevtools, useAtomsDebugValue } from 'jotai/devtools';
import { SnackbarProvider } from 'notistack';

import { useIsProduction } from '@lib/isProduction';
import { GlobalStyle, Theme } from '@styles';
import { Routing } from '@utils/Routing';

const AtomsDevTools = () => {
  useAtomsDevtools('global');
  return null;
};

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

const App = () => {
  const isProduction = useIsProduction();
  return (
    <JotaiProvider>
      {!isProduction && (
        <>
          <AtomsDevTools />
          <DebugAtoms />
        </>
      )}
      <SnackbarProvider maxSnack={4}>
        <Theme>
          <CssBaseline />
          <GlobalStyle />
          <Routing />
        </Theme>
      </SnackbarProvider>
    </JotaiProvider>
  );
};

export default App;
