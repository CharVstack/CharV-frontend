import { Head } from '@components/atoms/Head';
import { LoadingSpinner } from '@components/molecules/Progress';

export const Loading = () => (
  <>
    <Head title="Loading..." />
    <LoadingSpinner open />
  </>
);
