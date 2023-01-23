import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { InputAdornment, Stack } from '@mui/material';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { NumberField, TextField } from '@components/organisms/FormParts';

import { createVmFormSchema } from './schemas';

type BaseCreateVmFormProps = {
  isConfirm: boolean;
};

export type CreateVmFormInputs = z.infer<typeof createVmFormSchema>;

export const useCreateVmForm = () =>
  useForm<CreateVmFormInputs>({
    mode: 'all',
    resolver: zodResolver(createVmFormSchema),
    defaultValues: {
      name: '',
      cpu: 0,
      memory: 0,
    },
  });

export const useCreateVmFormContext = () => useFormContext<CreateVmFormInputs>();

export const CreateVmForm = ({ isConfirm }: BaseCreateVmFormProps) => (
  <Stack spacing={2}>
    <TextField
      type="text"
      name="name"
      variant="standard"
      label="名前"
      inputProps={{
        readOnly: isConfirm,
      }}
      InputLabelProps={{ shrink: true }}
    />
    <NumberField
      name="cpu"
      variant="standard"
      label="CPU"
      inputProps={{
        endadornment: <InputAdornment position="end">コア</InputAdornment>,
        readOnly: isConfirm,
        autoComplete: 'off',
      }}
      InputLabelProps={{ shrink: true }}
    />
    <NumberField
      name="memory"
      variant="standard"
      label="メモリ"
      inputProps={{
        endadornment: <InputAdornment position="end">MB</InputAdornment>,
        readOnly: isConfirm,
        autoComplete: 'off',
      }}
      InputLabelProps={{ shrink: true }}
    />
  </Stack>
);
