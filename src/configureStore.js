import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import layout from './app/reducers/layout';
import login from './app/reducers/login';

export default function configureStore() {
    const appReducers = combineReducers({
        layout,
        login
    });

    return createStore(appReducers, applyMiddleware(thunk));
}