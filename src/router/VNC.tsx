import { lazy } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const VNC = lazy(() => import('@pages/VNC'));

export const VNCRoute = () => {
  const { search } = useLocation();
  const query2 = new URLSearchParams(search);
  const vmId = query2.get('vmId');
  if (!vmId) {
    return <Navigate replace to="/" />;
  }

  return <VNC vmId={vmId} />;
};
