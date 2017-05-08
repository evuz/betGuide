import { SET_USER_STATS } from './actionTypes';

export function setUserStats (stats) {
    return {
        type: SET_USER_STATS,
        stats
    }
}