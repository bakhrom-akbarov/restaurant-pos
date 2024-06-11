import React from 'react';

import { Icon, Margins } from '../../../types';

export type CommonInputSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

type InputRootProps = Margins &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    size: CommonInputSizes;
    htmlInputSize?: number;
    label?: string;
    tooltip?: string;
    hintText?: string;
    fullWidth?: boolean;
    ref?: React.RefObject<HTMLInputElement>;
    leftIcon?: React.ComponentType | Icon;
    rightIcon?: React.ComponentType | Icon;
    leftIconEvent?: () => void;
    rightIconEvent?: () => void;
  };

export type CommonInputProps = InputRootProps & {
  hideError?: boolean;
  error?: string;
};

export type BaseInputProps = CommonInputProps & {
  horizontal?: boolean;
};

export type BaseInputContainerProps = {
  size: CommonInputSizes;
  isError: boolean;
  inputLeftIcon: boolean;
  inputRightIcon: boolean;
  fullWidth: boolean;
  rightIconEvent: boolean;
  leftIconEvent: boolean;
  disabled: boolean;
};

export type HintAndErrorMessageProps = {
  hintText?: string;
  hideError?: boolean;
  error?: string;
};
