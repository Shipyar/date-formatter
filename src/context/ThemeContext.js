import React, { useState } from 'react';

// Set base state for the context theme
const defaultState = { 
  isDark: false,
  toggleDark: () => {},
};

// Create a context for the current theme where we pass default state
const ThemeContext = React.createContext(defaultState);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false) // state to hold the dark toggle

  /**
   * Simple toggle function to 
   */
  const toggleIsDarkTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleIsDark: toggleIsDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;
export { ThemeProvider };
