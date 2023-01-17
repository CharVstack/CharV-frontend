import { useParams } from 'react-router-dom';

export const VmDetail = () => {
  const { vmId } = useParams();
  return (
    <>
      <h1>{vmId}</h1>
      <h2>TODO: implement this page</h2>
    </>
  );
};
