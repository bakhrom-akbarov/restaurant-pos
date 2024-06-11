// Enums for CSS and Flex specific values
import React from 'react';

type CssGlobalValues =
  | 'auto'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'fit-content'
  | 'revert-layer';

type FlexSpecificAlign =
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center';

export type Dimension = number | string | CssGlobalValues;

type WidthAndHeight =
  | Dimension
  | CssGlobalValues
  | 'max-content'
  | 'min-content';

// FlexAlign can have values of CssGlobalValues or FlexSpecificAlign
type FlexAlign = CssGlobalValues | FlexSpecificAlign;

type PaddingAndMargin = {
  p?: Dimension;
  pb?: Dimension;
  pt?: Dimension;
  pl?: Dimension;
  pr?: Dimension;
  pv?: Dimension;
  ph?: Dimension;
  m?: Dimension;
  mb?: Dimension;
  mt?: Dimension;
  ml?: Dimension;
  mr?: Dimension;
  mv?: Dimension;
  mh?: Dimension;
};

export type BoxProps = PaddingAndMargin & {
  bg?: string | CssGlobalValues;
  style?: React.CSSProperties;
  display?:
    | 'block'
    | 'inline'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid'
    | 'inline-grid'
    | 'flow-root'
    | 'none'
    | 'contents'
    | 'block flow'
    | 'inline flow'
    | 'inline flow-root'
    | 'block flex'
    | 'inline flex'
    | 'block grid'
    | 'inline grid'
    | 'block flow-root'
    | 'table'
    | 'table-row'
    | 'list-item'
    | CssGlobalValues;
  flex?: CssGlobalValues | number | string | 'min-content' | 'none';
  flexDirection?:
    | 'row'
    | 'column'
    | 'row-reverse'
    | 'column-reverse'
    | CssGlobalValues;
  alignSelf?: FlexAlign;
  alignItems?: FlexAlign;
  justifyContent?:
    | Exclude<FlexAlign, 'self-start' | 'self-end'>
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  justifySelf?: FlexAlign | 'left' | 'right';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | CssGlobalValues;
  flexFlow?:
    | 'row'
    | 'row-reverse'
    | 'column'
    | 'column-reverse'
    | 'nowrap'
    | 'wrap'
    | 'wrap-reverse'
    | 'row wrap'
    | 'column-wrap'
    | 'column-reverse wrap-reverse'
    | CssGlobalValues;
  flexGrow?: number | CssGlobalValues;
  flexShrink?: number | CssGlobalValues;
  flexBasis?:
    | string
    | 'max-content'
    | 'min-content'
    | 'fit-content'
    | 'content'
    | CssGlobalValues;
  position?:
    | 'static'
    | 'relative'
    | 'absolute'
    | 'fixed'
    | 'sticky'
    | CssGlobalValues;
  top?: Dimension;
  right?: Dimension;
  bottom?: Dimension;
  left?: Dimension;
  zIndex?: number;
  w?: WidthAndHeight;
  h?: WidthAndHeight;
  minW?: WidthAndHeight;
  minH?: WidthAndHeight;
  maxW?: WidthAndHeight;
  maxH?: WidthAndHeight;
  border?: string | CssGlobalValues;
  borderRadius?: string | CssGlobalValues;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto' | CssGlobalValues;
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto' | CssGlobalValues;
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'auto' | CssGlobalValues;
  gap?: Dimension;
  boxShadow?: string | CssGlobalValues;
  textAlign?:
    | 'start'
    | 'end'
    | 'left'
    | 'right'
    | 'center'
    | 'justify'
    | 'justify-all'
    | 'match-parent'
    | CssGlobalValues;
};
