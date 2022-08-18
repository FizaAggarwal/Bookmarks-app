import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers/index";
import mySaga from "./sagas";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: allReducers,
  middleware: [sagaMiddleware, logger],
});
sagaMiddleware.run(mySaga);

export default store;
