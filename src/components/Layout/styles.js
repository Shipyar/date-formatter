import styled, { createGlobalStyle } from "styled-components";

const colors = {
  black: "#202125",
  white: "#FFFFFF",
  green: "#5BCB02",
  greyOne: "#F8F8F8",
  greyTwo: "#EEEEEE",
  greyThree: "#A1A2A4"
};

// const fonts = {
//   heading: 'bold 24px/30px Roboto',
//   robotoReg: 'normal 16px/22px Roboto',
//   robotoMed: 'medium 16px/22px Roboto',
//   highlight: 'bold 12px/16px Roboto',
// }

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    height: 100vh;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    height: 100vh;
    #root {
      height: 100%;
    }
  }
`;

export const StyledAppContainer = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export { colors, GlobalStyles };
