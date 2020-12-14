import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Quote from './layouts/Quote';
import Home from './layouts/Home';
import NotFound from './layouts/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/calculator" component={App} />
      <Route exact path="/quote" component={Quote} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
