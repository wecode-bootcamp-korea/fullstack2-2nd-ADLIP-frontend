import React, { useState } from 'react';
import { UserContext } from './contexts';
import { ModalProvider } from 'styled-react-modal';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './Routes';

export default function App() {
  const [token, setToken] = useState('');

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </ModalProvider>
    </UserContext.Provider>
  );
}
