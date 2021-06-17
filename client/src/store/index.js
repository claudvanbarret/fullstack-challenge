import { combineReducers } from "redux";

import professional from "./professional/reducers";
import professionaltypes from "./professionaltypes/reducers";
import user from "./user/reducers";

export default combineReducers({
  professional,
  professionaltypes,
  user
});
