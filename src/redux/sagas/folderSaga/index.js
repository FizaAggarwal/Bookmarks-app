import { takeLatest, takeEvery } from "redux-saga/effects";

import {
  GET_FOLDERS_REQUEST,
  GET_CHILDREN_REQUEST,
  GET_BOOKMARKS_REQUEST,
  ADD_BOOKMARK_REQUEST,
  GET_CURRENT_FOLDER_REQUEST,
  CREATE_FOLDER_REQUEST,
} from "../../types/async_types";
import bookmarks from "./bookmarks";
import children from "./children";
import folders from "./folders";
import addBookmark from "./addBookmark";
import currentFolder from "./currentFolder";
import createFolder from "./createFolder";

function* folderSaga() {
  yield takeLatest(GET_FOLDERS_REQUEST, folders);
  yield takeEvery(GET_CHILDREN_REQUEST, children);
  yield takeLatest(GET_BOOKMARKS_REQUEST, bookmarks);
  yield takeLatest(ADD_BOOKMARK_REQUEST, addBookmark);
  yield takeLatest(GET_CURRENT_FOLDER_REQUEST, currentFolder);
  yield takeLatest(CREATE_FOLDER_REQUEST, createFolder);
}

export default folderSaga;
