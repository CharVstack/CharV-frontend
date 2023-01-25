import { Suspense } from 'react';
import { Route, Routes as BaseRoutes, Navigate } from 'react-router-dom';

import { Loading } from '@components/atoms/Loading';

import { HomeRoute } from './Home';
import { VMDetailRoute } from './VMDetail';
import { VMsRoute } from './VMsRoute';
import { VNCRoute } from './VNC';

export const Routes = () => (
  <Suspense fallback={<Loading />}>
    <BaseRoutes>
      <Route index element={<Navigate replace to="/home" />} />
      <Route path="home" element={<HomeRoute />} />
      <Route path="vms" element={<VMsRoute />} />
      <Route path="vms/:vmId" element={<VMDetailRoute />} />
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="vnc" element={<VNCRoute />} />
    </BaseRoutes>
  </Suspense>
);
