import styled, { createGlobalStyle } from "styled-components";

const lightTheme = {
  default: "#202125",
  background: "#FFFFFF",
  green: "#5BCB02",
  greyOne: "#F8F8F8",
  greyTwo: "#EEEEEE",
  greyThree: "#A1A2A4"
};

const darkTheme = {
  default: "#fefefe",
  background: "#535c68",
  green: "#5BCB02",
  greyOne: "#F8F8F8",
  greyTwo: "#EEEEEE",
  greyThree: "#A1A2A4"
};

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

export { lightTheme, darkTheme, GlobalStyles };
