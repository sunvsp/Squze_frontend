import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sale from '../components/Sale';
import Stock from '../components/Stock';
import Summary from '../components/Summary';

export default () => (
  <Switch>
    <Route exact path="/" component={Sale} />
    <Route exact path="/Sale" component={Sale} />
    <Route exact path="/Stock" component={Stock} />
    <Route exact path="/Summary" component={Summary} />
  </Switch>
);