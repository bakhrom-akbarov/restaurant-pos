import React from 'react';
import { Box } from '@carma-technologies/ui-library-react';

import { MenuItem, MenuItemProps } from './MenuItem';

export type MenuProps = {
  items: MenuItemProps[];
};

export const Menu = (props: MenuProps) => {
  return (
    <Box>
      {props.items.map((item, index) => (
        <MenuItem {...item} key={index + item.label} />
      ))}
    </Box>
  );
};
