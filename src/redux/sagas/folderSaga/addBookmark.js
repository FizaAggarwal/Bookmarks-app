import { put } from "redux-saga/effects";

import {
  ADD_BOOKMARK_SUCCESS,
  ADD_BOOKMARK_FAILURE,
} from "../../types/async_types";
import request from "../../requests";

function* addBookmark(action) {
  try {
    let item = { url: action.payload.link };
    if (action.payload.folder !== "") {
      item.folderId = action.payload.folder;
    }
    let result = yield request("bookmark", "post", item, true);
    yield put({ type: ADD_BOOKMARK_SUCCESS, result });
  } catch (error) {
    yield put({ type: ADD_BOOKMARK_FAILURE, error });
  }
}

export default addBookmark;
