import React from 'react';

import { DEFAULT_COLOR, DEFAULT_SIZE } from './constants';
import { IconSizeColor } from './types';

export const ArrowLeftIcon: React.FC<IconSizeColor> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 12H5M5 12L12 19M5 12L12 5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
