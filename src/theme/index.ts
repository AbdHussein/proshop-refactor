import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<DefaultTheme>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans',mulish; 

  }
`;
export const lightTheme: DefaultTheme = {
  common: {
    black: '#242424',
    white: '#ffffff',
  },
  primary: {
    lightYallow: '#FCDD06',
    darkYallow: 'red',
    disCount: '#FC4059',
  },
  background: {
    grey: '#979797',
    lightGrey: '#F2F2F2',
    darkGrey: '#707070',
    border: '#EDEAE3',
  },

  Typography: {
    color: '#242424',
    fontFamily: 'mulish',
  },
};

export const darkTheme: DefaultTheme = {
  common: {
    black: '#242424',
    white: '#ffffff',
  },
  primary: {
    lightYallow: '#FCDD06',
    darkYallow: '#FCDD06',
    disCount: '#FC4059',
  },
  background: {
    grey: '#979797',
    lightGrey: '#F2F2F2',
    darkGrey: '#707070',
    border: '#EDEAE3',
  },

  Typography: {
    color: '#242424',
    fontFamily: 'mulish',
  },
};
