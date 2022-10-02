import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, VMs, NotFound } from '@pages';

export const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="vms" element={<VMs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
