import { lazy } from 'react';
import { useParams, Navigate } from 'react-router-dom';

const VMDetail = lazy(() => import('@pages/VMDetail'));

export const VMDetailRoute = () => {
  const { vmId } = useParams();
  if (vmId === undefined) {
    return <Navigate replace to="/" />;
  }

  return <VMDetail vmId={vmId} />;
};
