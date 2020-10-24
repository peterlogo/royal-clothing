/**
 * Combines all the reducers managing the
 * states.
 */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";

// get the storage property needed in redux-persist.
import storage from "redux-persist/lib/storage";

/**
 * Redux persist configuration
 * for handling the reducers.
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
