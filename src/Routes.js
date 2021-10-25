import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function Router() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/list' component={List} />
            <Route exact path='/detail' component={Detail} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Router;
