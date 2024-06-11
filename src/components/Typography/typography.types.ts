import React from 'react';

import { ThemeColor } from '../../ThemeProvider';

export type TypographyDisplaySizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type TypographyTextSizes = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type TypographySize = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export type TypographyWeights =
  | 'thin'
  | 'extraLight'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'extraBold'
  | 'black';

export enum TypographyFontFamilyWeights {
  thin = 'figtree_regular',
  extraLight = 'figtree_regular',
  light = 'figtree_regular',
  regular = 'figtree_regular',
  medium = 'figtree_medium',
  semiBold = 'figtree_semibold',
  bold = 'figtree_semibold',
  extraBold = 'figtree_semibold',
  black = 'figtree_semibold',
}

export enum TypographyFontWeights {
  thin = 100,
  extraLight = 200,
  light = 300,
  regular = 400,
  medium = 500,
  semiBold = 600,
  bold = 700,
  extraBold = 800,
  black = 900,
}

export enum TypographyDisplayFontSizes {
  xxl = 72,
  xl = 60,
  lg = 48,
  md = 36,
  sm = 30,
  xs = 24,
}

export enum TypographyTextFontSizes {
  xxl = 22,
  xl = 20,
  lg = 18,
  md = 16,
  sm = 14,
  xs = 12,
}

export enum TypographyFontFamilies {
  figtree = 'Figtree',
}

type TypographyRootProps = {
  children?: string | React.ReactNode;
  color?: ThemeColor | string;
  customFontSize?: number;
  customFontWeight?: number;
  lineHeight?: number;
  className?: string;
  h?: number;
  style?: React.CSSProperties;
  as?: React.ElementType;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  mx?: number;
  my?: number;
  m?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  px?: number;
  py?: number;
  p?: number;
};

export type TypographyDisplayProps = TypographyRootProps & {
  type: 'display';
  size?: TypographyDisplaySizes;
  weight?: TypographyWeights;
  fontName?: TypographyFontFamilies;
};

export type TypographyTextProps = TypographyRootProps & {
  type?: 'text';
  size?: TypographyTextSizes;
  weight?: TypographyWeights;
  fontName?: TypographyFontFamilies;
};

export type TypographyProps = TypographyDisplayProps | TypographyTextProps;

export type TypographyStyledRootProps = {
  $color?: string;
  $customFontSize?: number;
  $lineHeight?: number;
  $style?: React.CSSProperties;
  as?: React.ElementType;
  $weight: TypographyWeights;
  $ml?: number | string;
  $mr?: number | string;
  $mt?: number | string;
  $mb?: number | string;
  $mx?: number | string;
  $my?: number | string;
  $m?: number | string;
  $pl?: number | string;
  $pr?: number | string;
  $pt?: number | string;
  $pb?: number | string;
  $px?: number | string;
  $py?: number | string;
  $p?: number | string;
};

type TypographyDisplayStyledProps = TypographyStyledRootProps & {
  size: TypographyDisplaySizes;
  type: 'display';
  color: string;
};

type TypographyTextStyledProps = TypographyStyledRootProps & {
  size: TypographyTextSizes;
  type: 'text';
  color: string;
};

export type TypographyStyledProps =
  | TypographyDisplayStyledProps
  | TypographyTextStyledProps;
