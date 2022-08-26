import { put } from "redux-saga/effects";

import {
  GET_CURRENT_FOLDER_SUCCESS,
  GET_CURRENT_FOLDER_FAILURE,
} from "../../types/async_types";
import request from "../../requests";

function* currentFolder(action) {
  if (localStorage.getItem("auth")) {
    try {
      let result = yield request(
        `folder?folderId=${action.payload.id}`,
        "get",
        {}
      );
      yield put({ type: GET_CURRENT_FOLDER_SUCCESS, result });
    } catch (error) {
      yield put({ type: GET_CURRENT_FOLDER_FAILURE, error });
    }
  }
}

export default currentFolder;
