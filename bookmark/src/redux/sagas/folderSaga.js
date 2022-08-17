import { takeLatest, put } from "redux-saga/effects";
import {
  GET_FOLDERS,
  GET_FOLDERS_SUCCESS,
  GET_CHILDREN,
  GET_CHILDREN_SUCCESS,
} from "../actions/types";

const url = "https://bookmarks-app-server.herokuapp.com/";

function* folders(action) {
  if (localStorage.getItem("auth")) {
    var auth = JSON.parse(localStorage.getItem("auth"));
    let result = yield fetch(action.payload.url.concat("folders"), {
      method: "get",
      headers: { Authorization: `Bearer ${auth}` },
    });
    result = yield result.json();
    console.log(result);
    yield put({ type: GET_FOLDERS_SUCCESS, result });
  }
}

function* children(action) {
  var auth = JSON.parse(localStorage.getItem("auth"));
  let result = yield fetch(
    url.concat("folders?folderId=").concat(action.payload.id),
    {
      method: "get",
      headers: { Authorization: `Bearer ${auth}` },
    }
  );
  result = yield result.json();
  console.log(result);
  yield put({ type: GET_CHILDREN_SUCCESS, result });
}

function* folderSaga() {
  yield takeLatest(GET_FOLDERS, folders);
  yield takeLatest(GET_CHILDREN, children);
}

export default folderSaga;
