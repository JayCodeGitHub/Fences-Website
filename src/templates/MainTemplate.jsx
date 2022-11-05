import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

export const MainTemplate = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Navigation />
      {children}
      <Footer />
    </>
  </ThemeProvider>
);
