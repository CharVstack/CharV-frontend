import { CssBaseline } from '@mui/material';
import { Provider as JotaiProvider } from 'jotai';
import { SnackbarProvider } from 'notistack';
import { lazy, Suspense } from 'react';

import { useIsProduction } from '@lib/isProduction';
import { GlobalStyle, Theme } from '@styles';
import { Routing } from '@utils/Routing';

const App = () => {
  const isProduction = useIsProduction();
  const DebugAtoms = lazy(() => import('@utils/devtools/DebugAtoms'));
  const AtomsDevTools = lazy(() => import('@utils/devtools/AtomsDevTools'));
  return (
    <JotaiProvider>
      {!isProduction && (
        <Suspense>
          <AtomsDevTools />
          <DebugAtoms />
        </Suspense>
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
