import {
  fetchProfessionalTypes,
  saveProfessionalType,
  editProfessionalType,
  removeProfessionalType
} from "../../services/professionaltypes.service";

export const REQUEST_PROFESSIONAL_TYPE_INIT = "REQUEST_PROFESSIONAL_TYPE_INIT";
export const REQUEST_PROFESSIONAL_TYPE_FAILURE = "REQUEST_PROFESSIONAL_TYPE_FAILURE";

export const FETCH_PROFESSIONAL_TYPE = "FETCH_PROFESSIONAL_TYPE";
export const SAVE_PROFESSIONAL_TYPE = "SAVE_PROFESSIONAL_TYPE";
export const EDIT_PROFESSIONAL_TYPE = "EDIT_PROFESSIONAL_TYPE";
export const REMOVE_PROFESSIONAL_TYPE = "REMOVE_PROFESSIONAL_TYPE";

const requestInit = () => ({
  type: REQUEST_PROFESSIONAL_TYPE_INIT
});

const requestFailure = (error) => ({
  type: REQUEST_PROFESSIONAL_TYPE_FAILURE,
  payload: error
});

/**
 * Fetchs all professional types
 */
export const fetch = () => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      const data = await fetchProfessionalTypes();
      dispatch({ type: FETCH_PROFESSIONAL_TYPE, payload: data });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

/**
 * Saves a professional type
 *
 * @param professionalType - professional type to be saved
 */
export const save = (professionalType) => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      const { data } = await saveProfessionalType(professionalType);
      dispatch({ type: SAVE_PROFESSIONAL_TYPE, payload: data });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

/**
 * Edits a professional type
 *
 * @param professionalType - professional type to be edited
 */
export const edit = (professionalType) => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      const { data } = await editProfessionalType(professionalType);
      dispatch({ type: EDIT_PROFESSIONAL_TYPE, payload: data });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

/**
 * Removes a professional type
 *
 * @param professionalType - professional type to be removed
 */
export const remove = (professionalType) => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      await removeProfessionalType(professionalType);
      dispatch({ type: REMOVE_PROFESSIONAL_TYPE, payload: professionalType });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};
