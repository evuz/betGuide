import { combineReducers } from 'redux';
import { CLEAR_DATA_PICK, SAVE_DATA_PICK } from './actionTypes';

export * from './actions';

const initialPickData = {
  sport: '',
  bookie: '',
  competition: '',
  tipster: '',
  match: '',
  pick: '',
  stake: '',
  odd: '',
  date: undefined,
};

function pickData(state = initialPickData, action) {
  switch (action.type) {
    case SAVE_DATA_PICK:
      return Object.assign({}, state, action.pickData);
    case CLEAR_DATA_PICK:
      return initialPickData;
    default:
      return state;
  }
}

export default combineReducers({
  pickData,
});
