import { SAVE_DATA_PICK, CLEAR_DATA_PICK } from './actionTypes';

export function saveDataPick(pickData) {
  return {
    type: SAVE_DATA_PICK,
    pickData,
  };
}

export function clearDataPick() {
  return {
    type: CLEAR_DATA_PICK,
  };
}
