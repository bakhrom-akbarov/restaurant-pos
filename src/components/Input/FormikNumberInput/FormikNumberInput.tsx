import React from 'react';
import { useField } from 'formik';

import { NumberInput, NumberInputProps } from '../NumberInput';

export type FormikNumberInputProps = NumberInputProps & { name: string };

export const FormikNumberInput: React.FC<FormikNumberInputProps> = (props) => {
  const { name, onChange } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <NumberInput
      {...props}
      onBlur={field.onBlur}
      value={field.value}
      onChange={(value, e) =>
        onChange ? onChange(value, e) : helpers.setValue(value)
      }
      hideError={false}
      error={meta.error}
    />
  );
};
