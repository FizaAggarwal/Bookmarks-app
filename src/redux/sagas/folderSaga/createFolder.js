import { put } from "redux-saga/effects";

import {
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_FAILURE,
} from "../../types/async_types";
import request from "../../requests";

function* createFolder(action) {
  try {
    let item = { name: action.payload.name };
    if (action.payload.id !== "") {
      item.parentId = action.payload.id;
    }
    let result = yield request("folder", "post", item, true);
    yield put({ type: CREATE_FOLDER_SUCCESS, result });
  } catch (error) {
    yield put({ type: CREATE_FOLDER_FAILURE, error });
  }
}

export default createFolder;
