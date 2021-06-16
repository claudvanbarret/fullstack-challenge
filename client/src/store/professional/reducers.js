import { createReducer } from "reduxsauce";

import {
  FETCH_PROFESSIONAL,
  SAVE_PROFESSIONAL,
  EDIT_PROFESSIONAL,
  REMOVE_PROFESSIONAL,
  REQUEST_PROFESSIONAL_INIT,
  REQUEST_PROFESSIONAL_FAILURE
} from "./actions";

const INITIAL_STATE = {
  content: [],
  loading: false
};

const init = (state) => ({ ...state, loading: true });
const finish = (state) => ({ ...state, loading: false });

const fetch = (state, action) => {
  const data = action.payload;

  return { content: data, loading: false };
};

const save = (state = INITIAL_STATE, action) => {
  const data = action.payload;
  const content = [...state.content, data];

  return { ...state, content, loading: false };
};

const edit = (state = INITIAL_STATE, action) => {
  const content = state.content.map((professional) => {
    if (professional.id !== action.payload.id) return professional;

    return { ...action.payload };
  });

  return { ...state, content, loading: false };
};

const remove = (state = INITIAL_STATE, action) => {
  const content = state.content.filter((professional) => professional.id !== action.payload.id);

  return { ...state, content, loading: false };
};

export default createReducer(INITIAL_STATE, {
  [FETCH_PROFESSIONAL]: fetch,
  [SAVE_PROFESSIONAL]: save,
  [EDIT_PROFESSIONAL]: edit,
  [REMOVE_PROFESSIONAL]: remove,
  [REQUEST_PROFESSIONAL_INIT]: init,
  [REQUEST_PROFESSIONAL_FAILURE]: finish
});
