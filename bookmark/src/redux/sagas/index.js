import authSaga from "./authSaga";
import folderSaga from "./folderSaga";
import { fork } from "redux-saga/effects";

function* mySaga() {
  yield fork(authSaga);
  yield fork(folderSaga); // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
}

export default mySaga;
