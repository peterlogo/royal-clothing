import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

/**
 * List of middlewares applied in the
 * redux store.
 */
const middlewares = [logger];

/**
 * Redux Store holding all the state values
 * within the application.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
