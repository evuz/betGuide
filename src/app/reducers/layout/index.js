import { TOOGLE_VISIBILITY_ASIDE } from './actionTypes';

export * from './actions';

function layout(state = {}, action) {
  switch (action.type) {
    case TOOGLE_VISIBILITY_ASIDE: {
      const visibilityAside = !state.visibilityAside;
      return Object.assign({}, state, { visibilityAside });
    }
    default:
      return state;
  }
}

export default layout;
