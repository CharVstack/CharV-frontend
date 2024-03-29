import { zodResolver } from '@hookform/resolvers/zod';
import { InputAdornment, Stack } from '@mui/material';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { NumberField, TextField } from '@components/organisms/FormParts';

import { createVmFormSchema } from './schemas';

type CreateVmFormProps = {
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

export const CreateVmForm = ({ isConfirm }: CreateVmFormProps) => (
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
    <NumberField
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
