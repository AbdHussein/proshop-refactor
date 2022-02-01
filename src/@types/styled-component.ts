import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    common?: {
      black: string;
      white: string;
    };
    primary?: {
      main: string;
    };
    background?: {
      default: string;
      paper: string;
    };
    secondary?: {
      main: string;
    };
    divider?: string;
    text?: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    error?: {
      main: string;
      light: string;
    };
    Typography?: {
      fontFamily: string;
    };
  }
}
