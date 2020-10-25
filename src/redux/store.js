import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

/**
 * List of middlewares applied in the
 * redux store.
 */
const middlewares = [logger];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

/**
 * Redux Store holding all the state values
 * within the application.
 */
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

/**
 * Persits the state values stored in the redux
 * store.
 */
const persistor = persistStore(store);

export { store, persistor };
