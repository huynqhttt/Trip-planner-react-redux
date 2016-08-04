import { Route, IndexRoute, Redirect } from 'react-router';
import React from 'react';
import App from './components/App'
import { NotFoundView } from './views';
import Authentications from './components/authentications';

const routes = (
	<Route path="/" component={App}>
    <IndexRoute component={Authentications} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
)

export default routes;