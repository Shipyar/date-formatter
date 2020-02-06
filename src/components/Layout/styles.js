import { createGlobalStyle } from 'styled-components';

const colors = {
  black: '#202125',
  white: '#FFFFFF',
  green: '#5BCB02',
  greyOne: '#F8F8F8',
  greyTwo: '#EEEEEE',
  greyThree: '#A1A2A4',
};

const fonts = {
  heading: 'bold 24px/30px Roboto',
  robotoReg: 'normal 16px/22px Roboto',
  robotoMed: 'medium 16px/22px Roboto',
  highlight: 'bold 12px/16px Roboto',
}

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    max-width: 100%;
    padding: 0;
    margin: 0;
  }
`

export { colors, GlobalStyles };
