import { createReducer } from "reduxsauce";

import {
  FETCH_PROFESSIONAL_TYPE,
  SAVE_PROFESSIONAL_TYPE,
  EDIT_PROFESSIONAL_TYPE,
  REMOVE_PROFESSIONAL_TYPE,
  REQUEST_PROFESSIONAL_TYPE_INIT,
  REQUEST_PROFESSIONAL_TYPE_FAILURE
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
  const content = state.content.map((professionalType) => {
    if (professionalType.id !== action.payload.id) return professionalType;

    return { ...action.payload };
  });

  return { ...state, content, loading: false };
};

const remove = (state = INITIAL_STATE, action) => {
  const content = state.content.filter((professionalType) => professionalType.id !== action.payload.id);

  return { ...state, content, loading: false };
};

export default createReducer(INITIAL_STATE, {
  [FETCH_PROFESSIONAL_TYPE]: fetch,
  [SAVE_PROFESSIONAL_TYPE]: save,
  [EDIT_PROFESSIONAL_TYPE]: edit,
  [REMOVE_PROFESSIONAL_TYPE]: remove,
  [REQUEST_PROFESSIONAL_TYPE_INIT]: init,
  [REQUEST_PROFESSIONAL_TYPE_FAILURE]: finish
});
