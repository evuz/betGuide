import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app/app';

import configureStore from './configureStore';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const { store, history } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>
  , document.getElementById('app'),
);
