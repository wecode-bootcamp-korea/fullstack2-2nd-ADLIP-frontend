import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { ModalProvider } from 'styled-react-modal';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle>
        <ThemeProvider theme={theme}>
          <ModalProvider></ModalProvider>
        </ThemeProvider>
      </GlobalStyle>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
