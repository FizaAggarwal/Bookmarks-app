import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import allReducers from "./reducers/index";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: allReducers,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(mySaga);

export default store;
