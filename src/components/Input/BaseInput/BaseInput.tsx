import React, { createElement, isValidElement } from 'react';
import styled, { useTheme } from 'styled-components';

import { Box } from '../../Box';
import { Helper } from '../../Helper';
import { Label } from '../../Label';
import { IconProps, Margins } from '../../types';

import { data } from './data';
import {
  BaseInputContainerProps,
  BaseInputProps,
  HintAndErrorMessageProps,
} from './types';

const FakeHintText = styled.div`
  height: 1.094rem;
`;

export const BaseInputWrapper = styled.div<Margins>`
  ${(props) => {
    const { mb, ml, mr, mt } = props;
    return {
      margin: `${mt}rem ${mr}rem ${mb}rem ${ml}rem`,
    };
  }}
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
`;

export const BaseInputContainer = styled.div<BaseInputContainerProps>`
  ${(props) => {
    const {
      inputLeftIcon,
      isError,
      size,
      fullWidth,
      inputRightIcon,
      leftIconEvent,
      rightIconEvent,
      disabled,
    } = props;
    let padding:
      | 'padding'
      | 'paddingWithDoubleIcon'
      | 'paddingWithLeftIcon'
      | 'paddingWithRightIcon' = 'padding';
    if (inputLeftIcon && inputRightIcon) padding = 'paddingWithDoubleIcon';
    else if (inputLeftIcon) padding = 'paddingWithLeftIcon';
    else if (inputRightIcon) padding = 'paddingWithRightIcon';
    const state = isError ? 'error' : 'default';
    return {
      fontFamily: 'Inter, sans-serif',
      fontSize: data.dataWithSize[size].fontSize,
      lineHeight: data.dataWithSize[size].lineHeight,
      display: 'grid',
      width: fullWidth ? '100%' : '150px',
      gridTemplateColumns: '1fr',
      alignItems: 'center',
      fontWeight: 400,

      '& input': {
        minWidth: '10px',
        padding: data.dataWithSize[size][padding],
        border: `1px solid ${data.dataWithState.placeholder[state].borderColor}`,
        fontSize: data.dataWithSize[size].fontSize,
        lineHeight: data.dataWithSize[size].lineHeight,
        color: data.dataWithState.placeholder[state].color,
        margin: 0,
        outline: 'none',
        fontFamily: 'Inter, sans-serif',
        borderRadius: '0.5rem',
        boxShadow: data.dataWithState.placeholder[state].boxShadow,
        fontWeight: 400,

        ':placeholder-shown': {
          border: `1px solid ${data.dataWithState.filled[state].borderColor}`,
          boxShadow: data.dataWithState.filled[state].boxShadow,
          color: data.dataWithState.filled[state].color,
        },
        ':focus': {
          border: `1px solid ${data.dataWithState.focus[state].borderColor}`,
          boxShadow: data.dataWithState.focus[state].boxShadow,
          color: data.dataWithState.focus[state].color,
        },
        ':disabled': {
          border: `1px solid ${data.dataWithState.disabled.default.borderColor}`,
          boxShadow: data.dataWithState.disabled.default.boxShadow,
          color: data.dataWithState.disabled.default.color,
          backgroundColor: data.dataWithState.disabled.default.backgroundColor,
        },
        '&:hover': {
          border: props.disabled
            ? `1px solid ${data.dataWithState.placeholder[state].borderColor}`
            : `1px solid ${props.theme.colors.primary300}`,
        },
      },
      '& .input-left-icon': {
        left: '16px',
        pointerEvents: leftIconEvent && !disabled ? undefined : 'none',
      },
      '& .input-right-icon': {
        right: '16px',
        pointerEvents: rightIconEvent && !disabled ? undefined : 'none',
      },
    };
  }}
  position: relative;
`;

export const InputIconWrapper = styled.span`
  position: absolute;
  width: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const HintAndErrorMessage: React.FC<HintAndErrorMessageProps> = (
  props,
) => {
  const { hideError, error, hintText } = props;
  if (hideError) {
    return hintText !== undefined ? (
      <Helper isError={false}>{hintText}</Helper>
    ) : null;
  }
  return hintText !== undefined || error !== undefined ? (
    <Helper isError={error !== undefined}>
      {error !== undefined ? error : hintText}
    </Helper>
  ) : (
    <FakeHintText />
  );
};

export const BaseInput: React.FC<BaseInputProps> = (props) => {
  const theme = useTheme();
  const {
    size,
    className,
    disabled = false,
    fullWidth = false,
    hintText,
    label,
    mb = 0,
    ml = 0,
    mr = 0,
    mt = 0,
    ref,
    tooltip,
    leftIcon,
    rightIcon,
    leftIconEvent,
    rightIconEvent,
    hideError,
    horizontal = false,
    ...rest
  } = props;
  let style = {};

  if (horizontal) {
    style = {
      ...style,
      display: 'flex',
      justifyContent: 'space-between',
      gap: '4.8%',
    };
  }

  const leftIconElement = isValidElement(leftIcon)
    ? leftIcon
    : createElement(leftIcon as React.ComponentType<IconProps>, {
        size: Number('20px'),
        color: theme.colors.gray500,
      });

  const rightIconElement = isValidElement(rightIcon)
    ? rightIcon
    : createElement(rightIcon as React.ComponentType<IconProps>, {
        size: Number('20px'),
        color: theme.colors.gray500,
      });
  return (
    <BaseInputWrapper
      mb={mb}
      ml={ml}
      mr={mr}
      mt={mt}
      ref={ref}
      style={style}
      className={className}>
      {label && (
        <Label
          style={{
            width: horizontal ? '22%' : undefined,
          }}
          tooltip={tooltip}>
          {label}
        </Label>
      )}
      <Box
        style={{
          flex: horizontal ? '1' : undefined,
        }}>
        <BaseInputContainer
          isError={hideError ? false : props.error !== undefined}
          size={size}
          fullWidth={horizontal || fullWidth}
          inputLeftIcon={leftIcon !== undefined}
          inputRightIcon={rightIcon !== undefined}
          rightIconEvent={rightIconEvent !== undefined}
          leftIconEvent={leftIconEvent !== undefined}
          disabled={disabled}>
          <input
            {...rest}
            disabled={disabled}
            style={{ cursor: !disabled ? 'pointer' : 'none' }}
          />
          {leftIcon !== undefined && (
            <InputIconWrapper
              className="input-left-icon"
              onClick={disabled ? undefined : leftIconEvent}>
              {leftIconElement}
            </InputIconWrapper>
          )}
          {rightIcon !== undefined && (
            <InputIconWrapper
              className="input-right-icon"
              onClick={disabled ? undefined : rightIconEvent}>
              {rightIconElement}
            </InputIconWrapper>
          )}
        </BaseInputContainer>
        <HintAndErrorMessage
          error={hideError ? undefined : props.error}
          hideError={hideError}
          hintText={hintText}
        />
      </Box>
    </BaseInputWrapper>
  );
};
