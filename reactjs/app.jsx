import './app.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware  } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './reducers/app'
import App from './components/layout/App'
import appStore from './stores'
const middleware = [ thunkMiddleware];
const init_store = (window._appState) ? Object.assign({},appStore,window._appState) : appStore;
const store = createStore(
	appReducer,
	init_store,
	applyMiddleware(...middleware)
	);
render(
	<Provider store={store}><App/></Provider>,
  document.getElementById('app_root')
);