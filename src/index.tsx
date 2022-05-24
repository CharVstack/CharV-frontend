import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';

import { App } from '@App';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
