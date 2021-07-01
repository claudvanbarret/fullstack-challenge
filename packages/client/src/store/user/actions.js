import { getUser } from "../../services/auth.service";

export const REQUEST_USER_INIT = "REQUEST_USER_INIT";
export const REQUEST_USER_FAILURE = "REQUEST_USER_FAILURE";

export const SET_USER = "SET_USER";

const requestInit = () => ({
  type: REQUEST_USER_INIT
});

const requestFailure = (error) => ({
  type: REQUEST_USER_FAILURE,
  payload: error
});

/**
 * @description Get the user logged in
 */
export const fetchUser = () => async (dispatch) => {
  dispatch(requestInit());
  try {
    const data = await getUser();
    dispatch({ type: SET_USER, payload: data });
  } catch (error) {
    dispatch(requestFailure(error));
  }
};

/**
 * Set user in the store
 */
export const setUser = (user) => async (dispatch) => {
  dispatch(requestInit());
  try {
    dispatch({ type: SET_USER, payload: user });
  } catch (error) {
    dispatch(requestFailure(error));
  }
};
