import React from 'react';
import { Typography } from '@carma-technologies/ui-library-react';
import styled from 'styled-components';

import { ArrowLeftIcon } from '../../icons/ArrowLeftIcon';

import { TopBarProps } from './types';

const TopBarStyled = styled.div<{ hasBottomBorder: boolean }>`
  height: 4.5rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-bottom: 1px solid;
  border-color: ${(p) =>
    p.hasBottomBorder ? p.theme.colors.gray200 : 'transparent'};
`;

const Title = styled(Typography)`
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: block;
  white-space: normal;
  padding: 0 1rem;
  max-width: 70%;
`;

const BackBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  height: 100%;
  aspect-ratio: 1 / 1;

  &:hover {
    background-color: ${(p) => p.theme.colors.gray50};
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  height: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const TopBar: React.FC<TopBarProps> = (props) => {
  const { title, actions, onBack, hasBottomBorder = false } = props;
  return (
    <TopBarStyled hasBottomBorder={hasBottomBorder}>
      {onBack && (
        <BackBtn onClick={onBack}>
          <ArrowLeftIcon size={24} />
        </BackBtn>
      )}
      {title && (
        <Title ml={onBack ? 1 : 1.5} type="text" size="xl" weight="semiBold">
          {title}
        </Title>
      )}
      {actions && <ActionsContainer>{actions}</ActionsContainer>}
    </TopBarStyled>
  );
};
