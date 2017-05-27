import { SET_USER_PICKS, FETCH_USER_PICKS } from './actionTypes';
import config from '../../../config';

export function setUserPicks(picks) {
  return {
    type: SET_USER_PICKS,
    picks,
  };
}

export function setFetchUserPicks(value) {
  return {
    type: FETCH_USER_PICKS,
    value,
  };
}

export function fetchUserPicks(month) {
  return (dispatch) => {
    dispatch(setFetchUserPicks(true));
    fetch(`${config.serverUrl}api/getPicks/${month}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then((res) => {
        dispatch(setFetchUserPicks(false));
        if (res.error) return;
        dispatch(setUserPicks(res.payload));
      });
  };
}
