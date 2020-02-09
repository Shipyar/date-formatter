import React from "react";

import { ThemeProvider } from "./context/ThemeContext";

import { StyledAppContainer } from "./components/Layout/styles";

import data from "./data/userData";

// Base Layout holds all theme information
import Layout from "./components/Layout";
import Opening from "./components/Opening";
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <StyledAppContainer>
          <Opening openings={data} />
          <Footer />
        </StyledAppContainer>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
