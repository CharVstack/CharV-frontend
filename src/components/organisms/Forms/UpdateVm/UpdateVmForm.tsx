import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { InputAdornment, Stack } from '@mui/material';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

import { useVmByVmId } from '@aspida/v1';
import { NumberField, TextField } from '@components/organisms/FormParts';

import { updateVmFormSchema } from './schemas';

type BaseUpdateVmFormProps = {
  isConfirm: boolean;
};

export type UpdateVmFormInputs = z.infer<typeof updateVmFormSchema>;

export const useUpdateVmForm = (vmId: string) => {
  const { data } = useVmByVmId(vmId);
  return useForm<UpdateVmFormInputs>({
    mode: 'all',
    resolver: zodResolver(updateVmFormSchema),
    defaultValues: data?.vm,
  });
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
