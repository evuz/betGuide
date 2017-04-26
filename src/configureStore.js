import { createStore, combineReducers } from 'redux';
import layout from './app/reducers/layout';

export default function configureStore() {
    const appReducers = combineReducers({
        layout
    });

    return createStore(appReducers);
}