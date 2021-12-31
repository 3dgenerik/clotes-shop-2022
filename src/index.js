import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

//WHEN RELOAD THE PAGE, ALL STATES STAYS
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import {PersistGate} from 'redux-persist/integration/react'
///////////////////////////////////////////////////

import { setMenuItems } from './containers/redux/GetMenuItems/GetMenuItems.reducer';
import { setCollection } from './containers/redux/preview-shop/preview-shop.reducer';
import { setChart } from './containers/redux/Chart/Chart.reducer';
import { setItemDetails } from './containers/redux/ShopItem/ShopItem.Redux';
import { setSigninEmailPassword } from './containers/redux/Signin/Signin.reducer';
import { setAuthUser } from './containers/redux/Auth/Auth.reducer';

//TO DO
// USE SELECTORS, RESELECOTRS AND MEMOAZING (CACHING)

const combinedReducers = combineReducers({
  setMenuItems: setMenuItems,
  setCollection: setCollection,
  setChart: setChart,
  setItemDetails: setItemDetails,
  setSigninEmailPassword: setSigninEmailPassword,
  setAuthUser:setAuthUser
});

//use config for persist
const persistConfig = {
  key: 'root',
  storage:storage,
  whitelist:['setMenuItems', 'setCollection', 'setChart', 'setItemDetails', 'setSigninEmailPassword']
}

// const store = createStore(combinedReducers, applyMiddleware(thunkMiddleware))
const store = createStore(persistReducer(persistConfig, combinedReducers), applyMiddleware(thunkMiddleware))
const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <PersistGate persistor = {persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

