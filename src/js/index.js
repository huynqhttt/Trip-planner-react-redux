import '../styles/main.scss';
import '../styles/flexboxgrid.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
// import { createStore, applyMiddleware } from 'redux';
// import promise from 'redux-promise';
// import reducers from './reducers';
import store from './store';

// const createStoreWithMiddleware = applyMiddleware(
// 	promise
// )(createStore);

//const store = createStoreWithMiddleware(reducers);

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Router routes={routes} history={browserHistory} />,
	rootElement
);