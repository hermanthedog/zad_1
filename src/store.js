import {createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import DevTools from './DevTools';
import thunk from 'redux-thunk';

const enhancer = compose(
  DevTools.instrument()
)

let store = createStore(
	reducers, 
	enhancer,
	applyMiddleware(thunk)
);

export default store;