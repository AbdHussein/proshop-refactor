import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<DefaultTheme>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'mulish'; 

  }
  body{
    padding:0;
    /* overflow: auto !important; */
    margin: 0;
    background:${props => props.theme.background?.default};   
    transition: all 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey; 
  border-radius: 3px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #616e7d; 
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #616e7d; 
}
`;

const BaseTheme: DefaultTheme = {
  Typography: {
    fontFamily: 'mulish',
  },
};

export const lightTheme: DefaultTheme = {
  ...BaseTheme,
  common: {
    black: '#121212',
    white: '#ffffff',
  },
  primary: {
    main: '#edc298',
  },
  secondary: {
    main: '#cbd2d9',
  },
  divider: 'rgba(112,112,112,0.5)',
  text: {
    primary: '#242424',
    secondary: '#616e7d',
    disabled: 'rgba(212,212,212,0.5)',
  },
  background: {
    paper: '#e4e7eb',
    default: '#f5f7fa',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
  },
};

export const darkTheme: DefaultTheme = {
  ...BaseTheme,
  common: {
    black: '#ffffff',
    white: '#121212',
  },
  primary: {
    main: '#edc298',
  },
  secondary: {
    main: '#52606d',
  },
  divider: 'rgba(212,212,212,0.5)',
  text: {
    primary: '#f6f6f7',
    secondary: '#9aa5b1',
    disabled: 'rgba(112,112,112,0.5)',
  },
  background: {
    paper: '#323f48',
    default: '#1f2933',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
  },
};
