import { InputAdornment, Stack, TextField, TextFieldProps } from '@mui/material';

import { CreateVmFormProps } from './CreateVmDialogTypes';

export const CreateVmDialogForm = (props: CreateVmFormProps) => {
  const { tab } = props;
  const commonProps: TextFieldProps = {
    variant: 'standard',
    InputLabelProps: { shrink: true },
    InputProps: { readOnly: tab === 'confirm' },
  };

  if (tab === 'edit') {
    const { setName, setCpu, setMemory } = props;
    return (
      <Stack spacing={2}>
        <TextField id="name" label="名前" onChange={(event) => setName(event.target.value)} {...commonProps} />
        <TextField
          id="cpu"
          label="CPU"
          onChange={(event) => setCpu(event.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">コア</InputAdornment>,
          }}
          {...commonProps}
        />
        <TextField
          id="memory"
          label="メモリ"
          onChange={(event) => setMemory(event.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">GB</InputAdornment>,
          }}
          {...commonProps}
        />
      </Stack>
    );
  }
  // If `tab` === 'confirm:
  const { name, cpu, memory } = props;
  return (
    <Stack spacing={2}>
      <TextField id="name" label="名前" defaultValue={name} {...commonProps} />
      <TextField
        id="cpu"
        label="CPU"
        defaultValue={cpu}
        InputProps={{
          endAdornment: <InputAdornment position="end">コア</InputAdornment>,
        }}
        {...commonProps}
      />
      <TextField
        id="memory"
        label="メモリ"
        defaultValue={memory}
        InputProps={{
          endAdornment: <InputAdornment position="end">GB</InputAdornment>,
        }}
        {...commonProps}
      />
    </Stack>
  );
};
