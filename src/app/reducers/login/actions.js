import { push } from 'react-router-redux';
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
import config from '../../../config';

export function toogleDisplayRegister() {
  return {
    type: TOOGLE_DISPLAY_REGISTER,
  };
}

export function saveDataUser(userData) {
  return {
    type: SAVE_DATA_USER,
    userData,
  };
}

export function signIn(userData) {
  const { username, password } = userData;
  let body = { password };
  if (username.indexOf('@') > -1) {
    body = Object.assign({}, body, { email: username });
  } else {
    body = Object.assign({}, body, { displayName: username });
  }
  return signUser(userData, (dispatch) => {
    fetch(`${config.serverUrl}api/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then((res) => {
        handleResponse(dispatch, res);
      });
  });
}

export function signUp(userData) {
  return signUser(userData, (dispatch) => {
    fetch(`${config.serverUrl}api/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        displayName: userData.username,
        email: userData.email,
        password: userData.password,
      }),
    })
      .then(res => res.json())
      .then((res) => {
        handleResponse(dispatch, res);
      });
  });
}

export function logOut() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_USER,
    });
    localStorage.removeItem('token');
    dispatch(push('/'));
  };
}

export function setUser(user) {
  const { displayName, email } = user;
  return {
    type: SET_USER,
    payload: {
      displayName,
      email,
    },
  };
}

function handleErrors(dispatch, err) {
  const { code } = err;
  const errors = {};
  switch (code) {
    case 11000:
      errors.email = 'E-mail already exist';
      break;
    case 404:
    case 401:
      errors.username = err.message;
      break;
    default:
      break;
  }
  dispatch({
    type: SAVE_ERROR_USER,
    errors,
  });
  dispatch({
    type: SET_LOGIN_FETCHING,
    isFetching: false,
  });
}

function handleResponse(dispatch, res) {
  const { token, error } = res;
  if (error) return handleErrors(dispatch, error);
  dispatch({
    type: CLEAR_DATA_USER,
  });
  localStorage.setItem('token', token);
  dispatch(setUser(res));
  dispatch({
    type: SET_LOGIN_FETCHING,
    isFetching: false,
  });
  dispatch(push('/'));
}

function validate(userData) {
  const errors = {};

  const keys = Object.keys(userData);
  keys.forEach((key) => {
    if (!userData[key]) errors[key] = `You must introduce a ${key}`;
  });

  return errors;
}

function signUser(userData, postFn) {
  return (dispatch) => {
    const errors = validate(userData);
    if (Object.keys(errors).length > 0) {
      dispatch({
        type: SAVE_ERROR_USER,
        errors,
      });
    } else {
      dispatch({
        type: CLEAR_ERRORS,
      });
      postFn(dispatch);
      dispatch({
        type: SET_LOGIN_FETCHING,
        isFetching: true,
      });
    }
  };
}
