import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext'
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';

const Router = () => {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      {
        !user
        ? <Switch>
          <Route exact path="/" component={ Signup } />
          <Route exact path="/login" component={ Login } />
          <Redirect from="*" to="/" />
        </Switch>
        : <Switch>
          <Route exact path="/" component={ Dashboard } />
          <Redirect from="*" to="/" />
        </Switch>
      }
    </BrowserRouter>
  );
};

export default Router;