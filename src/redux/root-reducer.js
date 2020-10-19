/**
 * Combines all the reducers managing the
 * states.
 */

import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
