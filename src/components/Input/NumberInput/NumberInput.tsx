import React from 'react';

import { BaseInput } from '../BaseInput';

import { NumberInputProps } from './types';

export const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { onChange, readOnly, value, ...rest } = props;

  const isNumber = (value: number | string) => {
    if (typeof value === 'number') return true;
    else if (!isNaN(+value)) return true;

    return false;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const trimmedValue = value.trim();
    if (trimmedValue.length) {
      if (isNumber(trimmedValue)) {
        onChange && onChange(+trimmedValue, e);
      } else if (trimmedValue === '-') {
        onChange && onChange(null, e);
      }
    } else {
      onChange && onChange(null, e);
    }
  };

  return (
    <BaseInput
      {...rest}
      value={value}
      readOnly={readOnly}
      pattern="[0-9]*"
      type="number"
      onChange={handleInput}
    />
  );
};
