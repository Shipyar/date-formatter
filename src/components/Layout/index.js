import React, { useContext, useEffect, useState } from 'react';
// TODO ADD PROPTYPES
import { ThemeProvider } from 'styled-components';

import ThemeContext from '../../context/ThemeContext'

// Styling theme
import { colors, GlobalStyles } from './styles';

const theme = {
  colors,
}

const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        {children}
      </>
    </ThemeProvider>
  )
};

export default Layout;
