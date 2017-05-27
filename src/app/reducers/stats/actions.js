import { SET_USER_STATS, FETCH_USER_STATS } from './actionTypes';
import config from '../../../config';

export function setUserStats(stats) {
  return {
    type: SET_USER_STATS,
    stats,
  };
}

export function setFetchUserStats(value) {
  return {
    type: FETCH_USER_STATS,
    value,
  };
}

export function fetchUserStats() {
  return (dispatch) => {
    dispatch(setFetchUserStats(true));
    fetch(`${config.serverUrl}api/userstats`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then(res => res.json())
      .then((res) => {
        dispatch(setFetchUserStats(false));
        if (res.error) return;
        dispatch(setUserStats(res.payload));
      });
  };
}
