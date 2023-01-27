import { zodResolver } from '@hookform/resolvers/zod';
import { InputAdornment, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { Vm } from '@api-hooks/v1/@types';
import { useVmByVmId } from '@aspida/v1';
import { NumberField, TextField } from '@components/organisms/FormParts';

import { updateVmFormSchema } from './schemas';

type BaseUpdateVmFormProps = {
  isConfirm: boolean;
};

export type UpdateVmFormInputs = z.infer<typeof updateVmFormSchema>;

export const useUpdateVmForm = (vmId: string) => {
  const { data } = useVmByVmId(vmId);
  const [defaultValues, setDefaultValues] = useState<Pick<Vm, 'name' | 'cpu' | 'memory'>>({
    name: '',
    cpu: 0,
    memory: 0,
  });
  const methods = useForm<UpdateVmFormInputs>({
    mode: 'all',
    resolver: zodResolver(updateVmFormSchema),
    shouldUnregister: true,
    defaultValues,
  });
  useEffect(() => {
    if (data) {
      setDefaultValues(data.vm);
      methods.setValue('name', data.vm.name);
      methods.setValue('cpu', data.vm.cpu);
      methods.setValue('memory', data.vm.memory);
      methods.trigger().then(
        () => {
          // do nothing
        },
        () => {
          // do nothing
        }
      );
    }
  }, [data, methods]);
  return { methods, defaultValues };
};

export const useUpdateVmFormContext = () => useFormContext<UpdateVmFormInputs>();

export const UpdateVmForm = ({ isConfirm }: BaseUpdateVmFormProps) => (
  <Stack spacing={2}>
    <TextField
      type="text"
      name="name"
      variant="standard"
      label="名前"
      InputProps={{
        readOnly: isConfirm,
      }}
      InputLabelProps={{ shrink: true }}
    />
    <TextField
      type="number"
      name="cpu"
      variant="standard"
      label="CPU"
      InputProps={{
        endAdornment: <InputAdornment position="end">コア</InputAdornment>,
        readOnly: isConfirm,
        autoComplete: 'off',
      }}
      InputLabelProps={{ shrink: true }}
    />
    <NumberField
      name="memory"
      type="number"
      variant="standard"
      label="メモリ"
      InputProps={{
        endAdornment: <InputAdornment position="end">MB</InputAdornment>,
        readOnly: isConfirm,
        autoComplete: 'off',
      }}
      InputLabelProps={{ shrink: true }}
    />
  </Stack>
);
