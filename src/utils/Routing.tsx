import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, NotFound } from '@pages';

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
