import { TOOGLE_VISIBILITY_DRAWER, SET_VISIBILITY_DRAWER } from './actionTypes';

export * from './actions';

function layout(state = {}, action) {
  switch (action.type) {
    case TOOGLE_VISIBILITY_DRAWER: {
      const visibilityDrawer = !state.visibilityDrawer;
      return Object.assign({}, state, { visibilityDrawer });
    }
    case SET_VISIBILITY_DRAWER: {
      const visibilityDrawer = action.value;
      return Object.assign({}, state, { visibilityDrawer });
    }
    default:
      return state;
  }
}

export default layout;
