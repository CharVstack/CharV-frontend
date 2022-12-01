import { InputAdornment, Stack, TextField } from '@mui/material';
import { useContext } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import { CreateVmFormContext } from '@components/organisms/Buttons/CreateNewVmButton';

export const CommonForm = () => {
  const isConfirm = useContext(CreateVmFormContext);

  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Stack spacing={2}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors?.name}
            variant="standard"
            label="名前"
            InputProps={{
              readOnly: isConfirm,
            }}
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      <Controller
        name="cpu"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors?.cpu}
            variant="standard"
            label="CPU"
            onChange={(event) => field.onChange(+event.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">コア</InputAdornment>,
              readOnly: isConfirm,
            }}
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
      <Controller
        name="memory"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors?.memory}
            variant="standard"
            label="メモリ"
            onChange={(event) => field.onChange(+event.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">MB</InputAdornment>,
              readOnly: isConfirm,
            }}
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
    </Stack>
  );
};
