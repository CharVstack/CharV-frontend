import { GlobalStyles, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from '@App';
import { darkTheme } from '@utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles
        styles={{
          body: { margin: 0 },
        }}
      />
      <App />
    </ThemeProvider>
  </Router>
);
