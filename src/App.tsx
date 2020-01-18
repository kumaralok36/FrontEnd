import React from 'react';
import logo from './logo.svg';
import { Router, Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

import history from "./history";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path="/about">
            
          </Route>
          <Route path="/users">
            
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
