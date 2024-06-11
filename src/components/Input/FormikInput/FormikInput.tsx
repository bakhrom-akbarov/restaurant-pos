import React from 'react';
import { useField } from 'formik';

import { BaseInput, BaseInputProps } from '../BaseInput';

export type FormikInputProps = BaseInputProps & { name: string };

export const FormikInput: React.FC<FormikInputProps> = (props) => {
  const { name, onChange } = props;
  const [field, meta, helpers] = useField(name);

  return (
    <BaseInput
      {...props}
      onBlur={field.onBlur}
      value={field.value}
      onChange={(e) =>
        onChange ? onChange(e) : helpers.setValue(e.target.value)
      }
      hideError={false}
      error={meta.error}
    />
  );
};
