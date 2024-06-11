import React, { createElement, useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@carma-technologies/ui-library-react';
import styled, { css, useTheme } from 'styled-components';

import { ChevronDownIcon, ChevronUpIcon } from '../../icons';
import { IconSizeColor } from '../../icons/types';

export type MenuItemProps = {
  icon?: React.ComponentType<IconSizeColor>;
  label: string;
  as?: React.ElementType;
  items?: MenuItemProps[];
  to?: string;
  onClick?: () => void;
  prefix?: React.ReactNode;
  pl?: number;
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

const MenuItemWrapper = styled.div`
  ${menuItemStyles}
`;

const MenuItemLinkWrapper = styled(NavLink)<{
  pl?: number;
}>`
  padding-left: ${(p) => p.pl}px;
  ${menuItemStyles}
`;

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    icon,
    label,
    items,
    onClick: onClickProp,
    to,
    prefix = null,
    pl,
    ...rest
  } = props;

  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const iconElement = icon
    ? createElement<IconSizeColor>(icon, {
        size: 24,
        color: theme.colors.gray500,
      })
    : null;

  const hasItems = !!items?.length;

  const onClick = useCallback(() => {
    if (hasItems) {
      setExpanded((prev) => !prev);
    }
    onClickProp?.();
  }, [hasItems, onClickProp]);

  return (
    <Wrapper>
      {hasItems ? (
        <MenuItemWrapper {...rest} onClick={onClick}>
          <Box
            className="menu-item-built-content"
            display="flex"
            alignItems="center"
            gap="12px">
            {iconElement}
            <Typography size="md" ml={8} weight="semiBold">
              {label}
            </Typography>
          </Box>
          {expanded ? (
            <ChevronUpIcon size={24} color={theme.colors.primary600} />
          ) : (
            <ChevronDownIcon size={24} color={theme.colors.gray500} />
          )}
        </MenuItemWrapper>
      ) : (
        <MenuItemLinkWrapper {...rest} to={to} onClick={onClick}>
          <Box
            className="menu-item-built-content"
            display="flex"
            alignItems="center"
            pl={`${pl}px`}
            gap="12px">
            {iconElement}
            <Typography size="md" ml={8} weight="semiBold">
              {label}
            </Typography>
          </Box>
          {prefix}
        </MenuItemLinkWrapper>
      )}
      {expanded && hasItems && (
        <Box>
          {items.map((item, index) => (
            <MenuItem pl={48} key={index + item.label} {...item} />
          ))}
        </Box>
      )}
    </Wrapper>
  );
};
