import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext'
import Home from './Home';
import Landing from './Landing';
import SearchResults from './SearchResults';
import Login from './Login';
import Signup from './Signup';
import Post from './Post';
import Search from './Search';
import UserProfile from './UserProfile';
import KittyProfile from './KittyProfile';


const Router = () => {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      {
        !user
        ? <Switch>
          <Route exact path="/" component={ Landing } />
          <Route exact path="/signup" component={ Signup } />
          <Route exact path="/login" component={ Login } />
          <Redirect from="*" to="/" />
        </Switch>
        : <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/kittyprofile/:id" component={ KittyProfile } />
          <Route exact path="/userprofile" component={ UserProfile } />
          <Route exact path="/postkitty" component={ Post } />
          <Route exact path="/search" component={ Search } />
          <Route exact path="/searchresults/:location" component={ SearchResults } />
          <Redirect from="*" to="/" />
        </Switch>
      }
    </BrowserRouter>
  );
};

export default Router;
