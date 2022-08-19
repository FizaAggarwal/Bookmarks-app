import { takeLatest } from "redux-saga/effects";

import {
  GET_FOLDERS_REQUEST,
  GET_CHILDREN_REQUEST,
  GET_BOOKMARKS_REQUEST,
  SIGN_UP_REQUEST,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  GET_ME_REQUEST,
} from "../types/async_types";
import { register, login, logout, user } from "./authSaga";
import { folders, children, bookmarks } from "./folderSaga";

function* mySaga() {
  yield takeLatest(SIGN_UP_REQUEST, register);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(GET_ME_REQUEST, user);

  yield takeLatest(GET_FOLDERS_REQUEST, folders);
  yield takeLatest(GET_CHILDREN_REQUEST, children);
  yield takeLatest(GET_BOOKMARKS_REQUEST, bookmarks);
}

export default mySaga;
