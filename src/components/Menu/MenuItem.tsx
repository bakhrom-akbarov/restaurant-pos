import React, { createElement } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css, useTheme } from 'styled-components';

import { IconSizeColor } from '../../icons/types';
import { Box } from '../Box';
import { Typography } from '../Typography';

export type MenuItemProps = {
  icon?: React.ComponentType<IconSizeColor>;
  label: string;
  as?: React.ElementType;
  items?: MenuItemProps[];
  to?: string;
  prefix?: React.ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const menuItemStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  text-decoration: none;
  border-radius: 6px;
  aspect-ratio: 1 / 1;

  & * {
    color: ${(p) => p.theme.colors.gray700};
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.gray100};
  }

  &.active {
    background-color: ${(p) => p.theme.colors.primary25};

    & * {
      color: ${(p) => p.theme.colors.primary600} !important;
    }

    & .menu-item-built-content path {
      stroke: ${(p) => p.theme.colors.primary600};
    }
  }
`;

const MenuItemLinkWrapper = styled(NavLink)<{
  pl?: number;
}>`
  padding-left: ${(p) => p.pl}px;
  ${menuItemStyles}
`;

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon, label, items, to, ...rest } = props;

  const theme = useTheme();

  const iconElement = icon
    ? createElement<IconSizeColor>(icon, {
        size: 32,
        color: theme.colors.gray500,
      })
    : null;

  return (
    <Wrapper>
      <MenuItemLinkWrapper {...rest} to={to}>
        <Box
          className="menu-item-built-content"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          flex={1}
          gap="12px">
          {iconElement}
          <Typography size="md" weight="semiBold">
            {label}
          </Typography>
        </Box>
      </MenuItemLinkWrapper>
    </Wrapper>
  );
};
