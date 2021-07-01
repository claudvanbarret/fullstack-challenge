import { createReducer } from "reduxsauce";

import { SET_USER, REQUEST_USER_INIT, REQUEST_USER_FAILURE } from "./actions";

const INITIAL_STATE = {
  user: null,
  loadingUser: true
};

const init = (state) => ({ ...state, loadingUser: true });
const finish = (state) => ({ ...state, loadingUser: false });

const set = (state, action) => {
  const user = action.payload;

  return { user, loadingUser: false };
};

export default createReducer(INITIAL_STATE, {
  [SET_USER]: set,
  [REQUEST_USER_INIT]: init,
  [REQUEST_USER_FAILURE]: finish
});
