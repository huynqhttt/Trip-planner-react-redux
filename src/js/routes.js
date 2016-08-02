import { Route, IndexRoute, Redirect } from 'react-router';
import React from 'react';
import App from './components/App'
import { NotFoundView } from './views';
import { LoginForm } from './components/authentications';

const routes = (
	<Route path="/" component={App}>
    <IndexRoute component={LoginForm} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
)

export default routes;