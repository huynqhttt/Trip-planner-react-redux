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
import App from './components/App';

// const createStoreWithMiddleware = applyMiddleware(
// 	promise
// )(createStore);

//const store = createStoreWithMiddleware(reducers);

const rootElement = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<Router routes={routes} history={browserHistory} />
	</Provider>,
	rootElement
);