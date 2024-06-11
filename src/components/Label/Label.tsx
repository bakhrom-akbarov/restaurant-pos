import React from 'react';
import styled, { useTheme } from 'styled-components';

import { Typography } from '../Typography';

import { LabelProps } from './types';

const LabelWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  & svg {
    height: 100%;
  }
`;

export const Label: React.FC<LabelProps> = (props) => {
  const { children, className, style } = props;
  return (
    <LabelWrapper style={style}>
      <Typography
        as="label"
        size="sm"
        weight="medium"
        color="gray700"
        className={className}
        lineHeight={1.25}>
        {children}
      </Typography>
    </LabelWrapper>
  );
};
