import { createStore, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducers from "./reducers";
import rootSagas from "./sagas";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function configureStore() {
  // config store by type env runing
  if (process && process.env.NODE_ENV !== "development") {
    // mode production
    return createStore(rootReducers, applyMiddleware(sagaMiddleware));
  }

  // all modes other than production
  return createStore(rootReducers, applyMiddleware(sagaMiddleware, logger));
}

// Mount it on the Store
const store = configureStore();

// Run the saga
sagaMiddleware.run(rootSagas);

export default store;
