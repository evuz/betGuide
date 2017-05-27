import { combineReducers } from 'redux';
import { FETCH_USER_PICKS, SET_USER_PICKS } from './actionTypes';

export * from './actions';

function picks(state = [], action) {
  switch (action.type) {
    case SET_USER_PICKS:
      return action.picks;
    default:
      return state;
  }
}

function fetch(state = false, action) {
  switch (action.type) {
    case FETCH_USER_PICKS:
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  picks,
  fetch,
});
