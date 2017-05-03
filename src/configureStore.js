import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import layout from './app/reducers/layout';
import login from './app/reducers/login';

export default function configureStore() {
    const appReducers = combineReducers({
        layout,
        login
    });

    let enhacer;
    if(process.env.NODE_ENV == 'production') {
        enhacer = applyMiddleware(thunk);
    } else {
        enhacer = compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    }

    return createStore(appReducers, enhacer);
}