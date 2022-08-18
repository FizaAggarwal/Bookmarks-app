import { takeLatest, put } from "redux-saga/effects";
import {
  GET_FOLDERS_REQUEST,
  GET_FOLDERS_SUCCESS,
  GET_CHILDREN_REQUEST,
  GET_CHILDREN_SUCCESS,
  GET_BOOKAMRKS_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_FOLDERS_FAILURE,
  GET_CHILDREN_FAILURE,
  GET_BOOKAMRKS_FAILURE,
} from "../actions/types";

const url = "https://bookmarks-app-server.herokuapp.com/";

function* folders() {
  if (localStorage.getItem("auth")) {
    var auth = JSON.parse(localStorage.getItem("auth"));
    try {
      let result = yield fetch(url.concat("folders"), {
        method: "get",
        headers: { Authorization: `Bearer ${auth}` },
      });
      result = yield result.json();
      console.log(result);
      yield put({ type: GET_FOLDERS_SUCCESS, result });
    } catch (error) {
      yield put({ type: GET_FOLDERS_FAILURE, error });
    }
  }
}

function* children(action) {
  var auth = JSON.parse(localStorage.getItem("auth"));
  try {
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
  } catch (error) {
    yield put({ type: GET_CHILDREN_FAILURE, error });
  }
}

function* bookmarks() {
  var auth = JSON.parse(localStorage.getItem("auth"));
  try {
    let result = yield fetch(url.concat("folder-bookmarks"), {
      method: "get",
      headers: { Authorization: `Bearer ${auth}` },
    });
    result = yield result.json();
    console.log(result);
    yield put({ type: GET_BOOKMARKS_SUCCESS, result });
  } catch (error) {
    yield put({ type: GET_BOOKAMRKS_FAILURE, error });
  }
}

function* folderSaga() {
  yield takeLatest(GET_FOLDERS_REQUEST, folders);
  yield takeLatest(GET_CHILDREN_REQUEST, children);
  yield takeLatest(GET_BOOKAMRKS_REQUEST, bookmarks);
}

export default folderSaga;
