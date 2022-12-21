import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { LoadingSpinner } from '@components/molecules/Progress';
import { DashBoard } from '@templates/DashBoard';

const Home = lazy(() => import('@pages/Home'));
const VMs = lazy(() => import('@pages/VMs'));

export const Routing = () => (
  <BrowserRouter>
    <DashBoard>
      <Suspense fallback={<LoadingSpinner open />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="vms" element={<VMs />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Suspense>
    </DashBoard>
  </BrowserRouter>
);
