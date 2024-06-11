import React from 'react';

export type Margins = {
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  horizontal?: boolean;
};

export type Icon = React.ReactNode | JSX.Element | undefined;

export type IconProps = {
  size?: number;
  color?: string;
};
