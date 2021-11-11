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
import Comment from './pages/Comment/Comment';
import TeamInfo from './pages/TeamInfo/TeamInfo';
import Feed from './pages/Feed/Feed';
import PublicRoute from './PublicRoute';
import HostSupport from './pages/HostSupport/HostSupport';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route exact path='/hostSupport' component={HostSupport} />
        <Route exact path='/teamInfo' component={TeamInfo} />
        <PublicRoute restricted exact path='/login' component={LogIn} />
        <PublicRoute restricted exact path='/signup' component={SignUp} />
        <Route exact path='/category' component={Category} />
        <Route path='/category/:id' component={List} />
        <Route exact path='/products/:id' component={Detail} />
        <Route exact path='/products/:id/comments' component={Comment} />
        <Route exact path='/feed' component={Feed} />
        <Route exact path='/' component={Main} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
