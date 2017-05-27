import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import app from './app/reducers/app';
import layout from './app/reducers/layout';
import login from './app/reducers/login';
import stats from './app/reducers/stats';
import picks from './app/reducers/picks';

export default function configureStore() {
  const history = createHistory();
  const appReducers = combineReducers({
    app,
    layout,
    login,
    routerReducer,
    stats,
    picks,
  });

  let enhacer;
  if (process.env.NODE_ENV === 'production') {
    enhacer = compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
    );
  } else {
    enhacer = compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    );
  }

  return { store: createStore(appReducers, enhacer), history };
}
