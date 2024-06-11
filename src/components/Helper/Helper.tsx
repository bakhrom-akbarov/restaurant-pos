import React from 'react';

import { Box } from '../Box';
import { Typography } from '../Typography';

import { HelperProps } from './types';

export const Helper: React.FC<HelperProps> = ({ isError, children }) => {
  return (
    <Box minH={1.094} className="minh">
      <Typography
        size="sm"
        weight="regular"
        color={isError ? 'error500' : 'gray600'}
        lineHeight={1.25}>
        {children}
      </Typography>
    </Box>
  );
};
