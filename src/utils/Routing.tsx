import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, VMs, NotFound } from '@pages';
import { DashBoard } from '@templates/DashBoard';

export const Routing = () => (
  <BrowserRouter>
    <DashBoard>
      <Routes>
        <Route index element={<Home />} />
        <Route path="vms" element={<VMs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DashBoard>
  </BrowserRouter>
);
