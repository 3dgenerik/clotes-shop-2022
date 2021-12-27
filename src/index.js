import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { setMenuItems } from './containers/redux/GetMenuItems/GetMenuItems.reducer';

const combinedReducers = combineReducers({
  setMenuItems: setMenuItems
});

const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

