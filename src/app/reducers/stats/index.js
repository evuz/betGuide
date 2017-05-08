import { SET_USER_STATS } from './actionTypes';
export * from './actions';

function stats(state = [], action) {
    switch (action.type) {
        case SET_USER_STATS:
            return action.stats
        default:
            return state;
    }
}

export default stats;