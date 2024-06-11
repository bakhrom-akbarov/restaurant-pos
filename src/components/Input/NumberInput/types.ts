import React from 'react';

import { CommonInputProps } from '../BaseInput';

export type NumberInputProps = Omit<CommonInputProps, 'onChange'> & {
  value?: number;
  onChange?: (
    value: number | null,
    e?: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  error?: string;
};
