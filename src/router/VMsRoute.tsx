import { lazy } from 'react';

const VMs = lazy(() => import('@pages/VMs'));

export const VMsRoute = () => <VMs />;
