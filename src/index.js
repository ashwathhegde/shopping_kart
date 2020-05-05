import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore } from "redux";

import { Provider } from 'react-redux';
import rootReducer from './store/reducers/rootReducer'
import React from 'react';
import logger from 'redux-logger';

 
const store = createStore(rootReducer, applyMiddleware(logger));
 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
 
serviceWorker.unregister(); 