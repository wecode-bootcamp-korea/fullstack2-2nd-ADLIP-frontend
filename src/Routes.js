//Routes.js
import React, { useState, createContext } from 'react';
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
import Comment from './pages/Comment/Comment';
import TeamInfo from './pages/TeamInfo/TeamInfo';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import theme from './styles/theme';

export const UserContext = createContext();

function Router() {
  const [token, setToken] = useState('');

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <UserContext.Provider value={{ token, setToken }}>
            <BrowserRouter>
              <Header />
              <Nav />
              <Switch>
                <Route exact path='/teamInfo' component={TeamInfo} />
                <Route exact path='/login' component={LogIn} />
                <Route exact path='/signup' component={SignUp} />
                <Route exact path='/category' component={Category} />
                <Route exact path='/category/:id' component={List} />
                <Route exact path='/category/:id/:sub' component={List} />
                <Route exact path='/products/:id' component={Detail} />
                <Route
                  exact
                  path='/products/:id/comments'
                  component={Comment}
                />
                <Route exact path='/' component={Main} />
              </Switch>
              <Footer />
            </BrowserRouter>
          </UserContext.Provider>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

export default Router;
