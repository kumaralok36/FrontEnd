import React from 'react';
import logo from './logo.svg';
import { Router, Switch, Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import history from "./mHistory";
import UserDahboardRoutes from './users/UserDashboardRoutes';
import HomePage from 'home/HomePage';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/home"><HomePage/></Route>
          <Route path="/login"></Route>
          <Route path="/register"></Route>
          <Route path="/user">
            <UserDahboardRoutes/>
          </Route>
          <Route path="/admin"></Route>
          <Route path="/hr"></Route>
          <Route path="/provider"></Route>
          <Redirect from="/" to="/home"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
