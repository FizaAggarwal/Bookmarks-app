import { fork } from "redux-saga/effects";

import authSaga from "./authSaga/index";
import folderSaga from "./folderSaga";

function* mySaga() {
  yield fork(authSaga);
  yield fork(folderSaga);
}

export default mySaga;
