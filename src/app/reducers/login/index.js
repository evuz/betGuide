import { combineReducers } from 'redux';

import { TOOGLE_DISPLAY_REGISTER, SAVE_DATA_USER, SAVE_ERROR_USER, CLEAR_ERRORS } from './actionTypes';
export * from './actions';

const initializeUserData = {
    username: '',
    email: '',
    password: ''
}

function isDisplayRegister(state = false, action) {
    switch (action.type) {
        case TOOGLE_DISPLAY_REGISTER:
            const isDisplayRegister = !state;
            return isDisplayRegister;
        default:
            return state;
    }
}

function userData(state = initializeUserData, action) {
    switch (action.type) {
        case SAVE_DATA_USER:
            const { userData } = action;
            return Object.assign({}, state, userData)
        default:
            return state;
    }
}

function userErrors(state = {}, action) {
    switch (action.type) {
        case SAVE_ERROR_USER:
            const { errors } = action;
            return errors
        case CLEAR_ERRORS:
            return {}
        default:
            return state;
    }
}

export default combineReducers({
    isDisplayRegister,
    userData,
    userErrors
})