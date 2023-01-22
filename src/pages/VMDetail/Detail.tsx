import { useParams } from 'react-router-dom';

import { VmConsoleButton } from '@components/molecules/Buttons';
import { LoadingSpinner } from '@components/molecules/Progress';

export const VmDetail = () => {
  const { vmId } = useParams();
  if (!vmId) {
    return <LoadingSpinner open />;
  }
  return (
    <>
      <h1>{vmId}</h1>
      <h2>TODO: implement this page</h2>
      <VmConsoleButton vmId={vmId} />
    </>
  );
};
