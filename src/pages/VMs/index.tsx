import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';

import { DashBoardLayout } from '@components/layouts';
import { CreateNewVmButton } from '@components/organisms/Buttons/CreateNewVmButton';
import { commonFormSchema } from '@components/organisms/Forms';

export type CommonFormInputs = z.infer<typeof commonFormSchema>;

export const VMs = () => {
  const methods = useForm<CommonFormInputs>({
    mode: 'all',
    resolver: zodResolver(commonFormSchema),
  });

  return (
    <DashBoardLayout>
      <FormProvider {...methods}>
        <CreateNewVmButton />
      </FormProvider>
    </DashBoardLayout>
  );
};
