import styled from 'styled-components';

import { BoxProps, Dimension } from './types';

const dimensionToCss = (value: Dimension): string => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

export const Box = styled.div<BoxProps>`
  padding-top: ${({ pt, pv, p = 0 }) => dimensionToCss(pt ?? pv ?? p)};
  padding-right: ${({ pr, ph, p = 0 }) => dimensionToCss(pr ?? ph ?? p)};
  padding-bottom: ${({ pb, pv, p = 0 }) => dimensionToCss(pb ?? pv ?? p)};
  padding-left: ${({ pl, ph, p = 0 }) => dimensionToCss(pl ?? ph ?? p)};
  margin-top: ${({ mt, mv, m = 0 }) => dimensionToCss(mt ?? mv ?? m)};
  margin-right: ${({ mr, mh, m = 0 }) => dimensionToCss(mr ?? mh ?? m)};
  margin-bottom: ${({ mb, mv, m = 0 }) => dimensionToCss(mb ?? mv ?? m)};
  margin-left: ${({ ml, mh = 0, m = 0 }) => dimensionToCss(ml ?? mh ?? m)};

  background-color: ${({ bg = 'transparent' }) => bg};
  display: ${({ display = 'block' }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex: ${({ flex = 'none' }) => flex};
  align-self: ${({ alignSelf = 'stretch' }) => alignSelf};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  justify-content: ${({ justifyContent = 'stretch' }) => justifyContent};
  justify-self: ${({ justifySelf = 'stretch' }) => justifySelf};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};
  position: ${({ position }) => position};
  top: ${({ top = 'auto' }) => dimensionToCss(top)};
  right: ${({ right = 'auto' }) => dimensionToCss(right)};
  bottom: ${({ bottom = 'auto' }) => dimensionToCss(bottom)};
  left: ${({ left = 'auto' }) => dimensionToCss(left)};

  z-index: ${({ zIndex }) => zIndex};
  width: ${({ w = 'auto' }) => dimensionToCss(w)};
  min-width: ${({ minW }) => (minW ? dimensionToCss(minW) : 'unset')};
  max-width: ${({ maxW }) => (maxW ? dimensionToCss(maxW) : 'unset')};
  height: ${({ h = 'auto' }) => dimensionToCss(h)};
  min-height: ${({ minH }) => (minH ? dimensionToCss(minH) : 'unset')};
  max-height: ${({ maxH }) => (maxH ? dimensionToCss(maxH) : 'unset')};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  overflow: ${({ overflow }) => overflow};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
  gap: ${({ gap = 0 }) => dimensionToCss(gap)};
  box-shadow: ${({ boxShadow }) => boxShadow};
  text-align: ${({ textAlign }) => textAlign};
`;
