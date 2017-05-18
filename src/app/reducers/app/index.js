import { INIT_APP } from './actionTypes';

export * from './actions';

function app(state = {}, action) {
  switch (action.type) {
    case INIT_APP:
      return Object.assign({}, state, { initApp: true });
    default:
      return state;
  }
}

export default app;
