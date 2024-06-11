import React from 'react';
import styled, { useTheme } from 'styled-components';

import { HelpCircle } from '../../icons/HelpCircle';
import { Box } from '../Box';
import { Tooltip } from '../Tooltip';
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
  const { children, tooltip, className, style } = props;
  const theme = useTheme();
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
      {tooltip !== undefined && (
        <Box display="flex" alignItems="flex-start" mt={0.2}>
          <Tooltip
            title={tooltip}
            animation="scale"
            duration={300}
            arrow
            size="small"
            arrowSize="small">
            <HelpCircle size="14px" color={theme.colors.gray400} />
          </Tooltip>
        </Box>
      )}
    </LabelWrapper>
  );
};
