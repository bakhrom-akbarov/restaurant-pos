import 'styled-components/native';

import defaultTheme from './defaultTheme.json';

type CustomTheme = typeof defaultTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {
    colors: typeof defaultTheme.colors & NonNullable<unknown>;
  }
}
