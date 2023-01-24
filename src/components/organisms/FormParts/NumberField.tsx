import { TextFieldProps as MUITextFieldProps, TextField as MUITextField } from '@mui/material';
import { useCallback } from 'react';
import { useFormContext, UseControllerProps, Controller } from 'react-hook-form';

export type NumberFieldProps = Pick<UseControllerProps, 'name'> &
  Pick<MUITextFieldProps, 'variant' | 'label' | 'InputProps' | 'InputLabelProps' | 'type'>;

export const NumberField = ({ name, InputProps, label, variant, type }: NumberFieldProps) => {
  const { control } = useFormContext();
  const mergedInputProps: MUITextFieldProps['InputProps'] = {
    ...InputProps,
    ...{
      inputMode: 'numeric',
      pattern: '[0-9]*',
    },
  };
  const onChange = useCallback((value: string) => (Number.isNaN(Number(value)) ? value : Number(value)), []);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <MUITextField
          {...field}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          variant={variant}
          label={label}
          InputProps={mergedInputProps}
          InputLabelProps={{ shrink: true }}
          type={type}
          onChange={(event) => field.onChange(onChange(event.target.value))}
        />
      )}
    />
  );
};
