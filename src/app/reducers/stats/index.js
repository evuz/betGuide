import { combineReducers } from 'redux';
import { SET_USER_STATS, FETCH_USER_STATS } from './actionTypes';

export * from './actions';

function stats(state = [], action) {
  switch (action.type) {
    case SET_USER_STATS:
      return action.stats;
    default:
      return state;
  }
}

function fetch(state = false, action) {
  switch (action.type) {
    case FETCH_USER_STATS:
      return action.value;
    default:
      return state;
  }
}

export default combineReducers({
  fetch,
  stats,
});
