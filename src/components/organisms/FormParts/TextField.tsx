import { TextFieldProps as MUITextFieldProps, TextField as MUITextField } from '@mui/material';
import { useFormContext, UseControllerProps, Controller } from 'react-hook-form';

export type TextFieldProps = Pick<UseControllerProps, 'name'> &
  Pick<MUITextFieldProps, 'variant' | 'label' | 'inputProps' | 'InputLabelProps' | 'type'> & {
    onChange?: (value: string) => string | number;
  };

export const TextField = ({ name, inputProps, label, variant, type, onChange }: TextFieldProps) => {
  const { control } = useFormContext();
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
          inputProps={inputProps}
          InputLabelProps={{ shrink: true }}
          type={type}
          onChange={onChange ? (event) => field.onChange(onChange(event.target.value)) : field.onChange}
        />
      )}
    />
  );
};
