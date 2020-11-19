import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";
//import thunk from "redux-thunk";

/**
 * Initialising the Saga Middleware
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * List of middlewares applied in the
 * redux store.
 */
const middlewares = [sagaMiddleware];

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

/**
 * Runs the Redux Saga Actions
 */
sagaMiddleware.run(rootSaga);

export { store, persistor };
