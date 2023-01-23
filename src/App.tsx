import { CssBaseline } from '@mui/material';
import { Provider as JotaiProvider } from 'jotai';
import { SnackbarProvider } from 'notistack';
import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorDialog } from '@components/organisms/Dialogs';
import { useIsProduction } from '@lib/isProduction';
import { Routes } from '@router/Routes';
import { GlobalStyle, Theme } from '@styles';
import { DashBoard } from '@templates/DashBoard';

const DebugAtoms = lazy(() => import('@utils/devtools/DebugAtoms'));
const AtomsDevTools = lazy(() => import('@utils/devtools/AtomsDevTools'));

const App = () => {
  const isProduction = useIsProduction();
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
          <BrowserRouter>
            <DashBoard>
              <Routes />
            </DashBoard>
          </BrowserRouter>
          <ErrorDialog />
        </Theme>
      </SnackbarProvider>
    </JotaiProvider>
  );
};

export default App;
