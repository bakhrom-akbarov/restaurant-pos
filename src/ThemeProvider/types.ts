import defaultTheme from './defaultTheme.json';

// Use this type to define the color prop. It will accept only colors from the theme.

export type DefaultTheme = typeof defaultTheme;

export type ThemeProviderProps = {
  children: JSX.Element;
  theme?: DefaultTheme;
};

export type ThemeColor = keyof typeof defaultTheme.colors;
