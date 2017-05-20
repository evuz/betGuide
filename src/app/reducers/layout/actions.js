import { TOOGLE_VISIBILITY_DRAWER, SET_VISIBILITY_DRAWER } from './actionTypes';

export function toogleVisibilityDrawer() {
  return {
    type: TOOGLE_VISIBILITY_DRAWER,
  };
}

export function setVisibilityDrawer(value) {
  return {
    type: SET_VISIBILITY_DRAWER,
    value,
  };
}
