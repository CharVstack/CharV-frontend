import { createTheme, GlobalStyles, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotFound from './pages/404';
import Home from './pages/home';
import Instances from './pages/instances';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles
      styles={{
        body: { margin: 0 },
      }}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="instances" element={<Instances />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
