import { InputAdornment, Stack, TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

export const CommonForm = (isConfirm: boolean) => {
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
        name="vcpu"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors?.vcpu}
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
              endAdornment: <InputAdornment position="end">GB</InputAdornment>,
              readOnly: isConfirm,
            }}
            InputLabelProps={{ shrink: true }}
          />
        )}
      />
    </Stack>
  );
};
