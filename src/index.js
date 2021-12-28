import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

import { setMenuItems } from './containers/redux/GetMenuItems/GetMenuItems.reducer';
import { setCollection } from './containers/redux/preview-shop/preview-shop.reducer';
import { setChart } from './containers/redux/Chart/Chart.reducer';
import { setItemDetails } from './containers/redux/ShopItem/ShopItem.Redux';

const combinedReducers = combineReducers({
  setMenuItems: setMenuItems,
  setCollection: setCollection,
  setChart: setChart,
  setItemDetails: setItemDetails
});

const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store = {store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

