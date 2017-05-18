import { combineReducers } from 'redux';
import {
  TOOGLE_DISPLAY_REGISTER,
  SAVE_DATA_USER,
  CLEAR_DATA_USER,
  SAVE_ERROR_USER,
  CLEAR_ERRORS,
  SET_LOGIN_FETCHING,
  SET_USER,
  CLEAR_USER,
} from './actionTypes';

export * from './actions';

const initializeUserData = {
  username: '',
  email: '',
  password: '',
};

function isDisplayRegister(state = false, action) {
  switch (action.type) {
    case TOOGLE_DISPLAY_REGISTER: {
      return !state;
    }
    default:
      return state;
  }
}

function userData(state = initializeUserData, action) {
  switch (action.type) {
    case SAVE_DATA_USER: {
      return Object.assign({}, state, action.userData);
    }
    case CLEAR_DATA_USER:
      return initializeUserData;
    default:
      return state;
  }
}

function userErrors(state = {}, action) {
  switch (action.type) {
    case SAVE_ERROR_USER: {
      return action.errors;
    }
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

function fetching(state = false, action) {
  switch (action.type) {
    case SET_LOGIN_FETCHING: {
      return action.isFetching;
    }
    default:
      return state;
  }
}

function user(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case CLEAR_USER:
      return {};
    default:
      return state;
  }
}

export default combineReducers({
  isDisplayRegister,
  userData,
  userErrors,
  fetching,
  user,
});
