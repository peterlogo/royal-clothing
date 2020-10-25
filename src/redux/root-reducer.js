/**
 * Combines all the reducers managing the
 * states.
 */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { directoryReducer } from "./directory/directory.reducer";

// get the storage property needed in redux-persist.
import storage from "redux-persist/lib/storage";
import { collectionReducer } from "./collection/collection.reducer";

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
  directory: directoryReducer,
  shop: collectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
