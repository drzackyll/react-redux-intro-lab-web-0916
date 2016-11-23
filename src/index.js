import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore'
import { getInventoryItems } from '../actions/inventoryItemsAction'
import connectedComponent from './App'

const store = configureStore();

store.dispatch(getInventoryItems())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
