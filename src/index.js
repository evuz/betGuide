import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './app/app';

import configureStore from './configureStore';

const { store, history } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>
  , document.getElementById('app'),
);
