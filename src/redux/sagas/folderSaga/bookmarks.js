import { put } from "redux-saga/effects";

import {
  GET_BOOKMARKS_SUCCESS,
  GET_BOOKMARKS_FAILURE,
} from "../../types/async_types";
import request from "../../requests";

function* bookmarks(action) {
  try {
    let result =
      action.payload.id === undefined
        ? yield request("folder-bookmarks", "get", {})
        : yield request(
            `folder-bookmarks?folderId=${action.payload.id}`,
            "get",
            {}
          );
    yield put({ type: GET_BOOKMARKS_SUCCESS, result });
  } catch (error) {
    yield put({ type: GET_BOOKMARKS_FAILURE, error });
  }
}

export default bookmarks;
