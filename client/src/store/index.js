import { combineReducers } from "redux";

import professional from "./professional/reducers";
import professionaltypes from "./professionaltypes/reducers";

export default combineReducers({
  professional,
  professionaltypes
});
