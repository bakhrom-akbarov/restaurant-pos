import React from 'react';

export type TopBarProps = {
  title?: string | React.ReactNode;
  actions?: React.ReactNode;
  onBack?: (() => void) | undefined;
  hasBottomBorder?: boolean;
};

export type TopBarLayoutDefaultProps = {
  bottomBar?: React.ReactNode;
  title?: string | React.ReactNode;
  onBack?: () => void;
  topBarActions?: React.ReactNode;
};

export type TopBarLayoutProps = {
  bottomBar?: React.ReactNode;
  title?: string | React.ReactNode;
  onBack?: () => void;
  topBarActions?: React.ReactNode;
  children?: React.ReactNode;
  disableBodyOverflow?: boolean;
  isContentLoading?: boolean;
  errorTitle?: string | undefined | null | React.ReactNode;
  errorMessage?: string | undefined | null | React.ReactNode;
  isError?: boolean;
  onRetry?: (() => void) | undefined;
};
