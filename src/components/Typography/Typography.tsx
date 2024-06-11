import React from 'react';
import styled, { useTheme } from 'styled-components';

import {
  TypographyDisplayFontSizes,
  TypographyFontWeights,
  TypographyProps as TypographyRootProps,
  TypographyStyledProps,
  TypographyTextFontSizes,
} from './typography.types';

const dimensionToCss = (value: number | string): string => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

const TypographyStyled = styled.span<TypographyStyledProps>`
  font-size: ${(p) => {
    if (p.$customFontSize) {
      return `${p.$customFontSize}px`;
    } else if (p.type === 'display') {
      return `${TypographyDisplayFontSizes[p.size]}px`;
    } else {
      return `${TypographyTextFontSizes[p.size]}px`;
    }
  }};
  font-weight: ${(p) => TypographyFontWeights[p.$weight]};
  font-family: 'Figtree', sans-serif;
  color: ${(p) => p.$color};
  margin-top: ${({ $mt, $my, $m = 0 }) => dimensionToCss($mt ?? $my ?? $m)};
  margin-right: ${({ $mr, $mx, $m = 0 }) => dimensionToCss($mr ?? $mx ?? $m)};
  margin-bottom: ${({ $mb, $my, $m = 0 }) => dimensionToCss($mb ?? $my ?? $m)};
  margin-left: ${({ $ml, $mx, $m = 0 }) => dimensionToCss($ml ?? $mx ?? $m)};
  padding-top: ${({ $pt, $py, $p = 0 }) => dimensionToCss($pt ?? $py ?? $p)};
  padding-right: ${({ $pr, $px, $p = 0 }) => dimensionToCss($pr ?? $px ?? $p)};
  padding-bottom: ${({ $pb, $py, $p = 0 }) => dimensionToCss($pb ?? $py ?? $p)};
  padding-left: ${({ $pl, $px, $p = 0 }) => dimensionToCss($pl ?? $px ?? $p)};
`;

export const Typography = ({
  type = 'text',
  size = 'md',
  color = 'gray900',
  children,
  weight = 'medium',
  customFontSize,
  lineHeight = 0,
  style,
  as,
  ml,
  mr,
  mt,
  mb,
  mx,
  my,
  m,
  pl,
  pr,
  pt,
  pb,
  px,
  py,
  p,
  ...rest
}: TypographyRootProps) => {
  const theme = useTheme();

  if (color && Object.keys(theme.colors).includes(color)) {
    color = theme.colors[color];
  }

  const currentType = type as 'text' | 'display';

  return (
    <TypographyStyled
      type={currentType}
      size={size}
      $weight={weight}
      $color={color}
      $customFontSize={customFontSize}
      $lineHeight={lineHeight}
      as={as}
      $ml={ml}
      $mr={mr}
      $mt={mt}
      $mb={mb}
      $mx={mx}
      $my={my}
      $m={m}
      $pl={pl}
      $pr={pr}
      $pt={pt}
      $pb={pb}
      $px={px}
      $py={py}
      $p={p}
      style={style}
      {...rest}>
      {children}
    </TypographyStyled>
  );
};
