import React from 'react';
import { Router, Route } from 'dva/router';
import home from './routes/home/home';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={home} />
    </Router>
  );
}

export default RouterConfig;
