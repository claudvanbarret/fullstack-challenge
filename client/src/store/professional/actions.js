import {
  fetchProfessionals,
  saveProfessional,
  editProfessional,
  removeProfessional
} from "../../services/professional.service";

export const REQUEST_PROFESSIONAL_INIT = "REQUEST_PROFESSIONAL_INIT";
export const REQUEST_PROFESSIONAL_FAILURE = "REQUEST_PROFESSIONAL_FAILURE";

export const FETCH_PROFESSIONAL = "FETCH_PROFESSIONAL";
export const SAVE_PROFESSIONAL = "SAVE_PROFESSIONAL";
export const EDIT_PROFESSIONAL = "EDIT_PROFESSIONAL";
export const REMOVE_PROFESSIONAL = "REMOVE_PROFESSIONAL";

const requestInit = () => ({
  type: REQUEST_PROFESSIONAL_INIT
});

const requestFailure = (error) => ({
  type: REQUEST_PROFESSIONAL_FAILURE,
  payload: error
});

/**
 * Fetchs all professionals
 */
export const fetch = () => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      const data = await fetchProfessionals();
      dispatch({ type: FETCH_PROFESSIONAL, payload: data });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

/**
 * Saves a Professional
 *
 * @param professional - professional to be saved
 */
export const save = (professional) => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      const { data } = await saveProfessional(professional);
      dispatch({ type: SAVE_PROFESSIONAL, payload: data });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

/**
 * Edits a Professional
 *
 * @param professional - professional to be edited
 */
export const edit = (professional) => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      const { data } = await editProfessional(professional);
      dispatch({ type: EDIT_PROFESSIONAL, payload: data });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};

/**
 * Removes a Professional
 *
 * @param professional - professional to be removed
 */
export const remove = (professional) => {
  return async (dispatch) => {
    dispatch(requestInit());
    try {
      await removeProfessional(professional);
      dispatch({ type: REMOVE_PROFESSIONAL, payload: professional });
    } catch (error) {
      dispatch(requestFailure(error));
    }
  };
};
