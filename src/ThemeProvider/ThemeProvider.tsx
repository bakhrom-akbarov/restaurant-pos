import React from 'react';
import {
  createGlobalStyle,
  ThemeProvider as StyledThemeProvider,
} from 'styled-components';

import defaultTheme from './defaultTheme.json';
import { ThemeProviderProps } from './types';

// 1. import the font
// import pala from "./assets/pala.ttf";
// TODO: Set global font
// const GlobalStyle = createGlobalStyle`
//   @font-face {
//     font-family: pala;
//     src: url(${pala}) format('truetype');
//     font-weight: normal;
//     font-style: normal;
//   }
// `;

// export defaultTheme
export const theme = defaultTheme;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
    body {
        font-family: "Figtree", sans-serif;
    }
`;

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { children, theme } = props;
  return (
    <StyledThemeProvider theme={{ ...defaultTheme, ...theme }}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};
