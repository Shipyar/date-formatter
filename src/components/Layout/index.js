import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";

import ThemeContext from "../../context/ThemeContext";

// Styling theme
import { lightTheme, darkTheme, GlobalStyles } from "./styles";

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  const theme = {
    colors : isDark ? darkTheme : lightTheme,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>{children}</>
    </ThemeProvider>
  );
};

export default Layout;
