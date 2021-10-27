import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import Footer from '../src/components/Footer/Footer';
import Header from '../src/components/Header/Header';
import Nav from '../src/components/Nav/Nav';
import Category from './pages/Category/Category';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function Router() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Nav />
          <Switch>
            <Route exact path='/login' component={LogIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/category/:id' component={List} />
            <Route exact path='/category/:id/:sub' component={List} />
            <Route exact path='/category' component={Category} />
            <Route exact path='/products/:id' component={Detail} />
            <Route exact path='/' component={Main} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default Router;
