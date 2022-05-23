import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NotFound } from '@pages/error';
import { Home } from '@pages/home';
import { Instances } from '@pages/instances';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="instances" element={<Instances />} />

      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
