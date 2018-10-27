import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './Components/Home';

export default () => (
  <Router>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Redirect path="/" to="/home" />
    </Switch>
  </Router>
);