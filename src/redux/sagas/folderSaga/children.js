import { put } from "redux-saga/effects";

import {
  GET_CHILDREN_SUCCESS,
  GET_CHILDREN_FAILURE,
} from "../../types/async_types";
import request from "../../requests";

function* children(action) {
  try {
    let result = yield request(
      `folders?folderId=${action.payload.id}`,
      "get",
      {}
    );
    yield put({ type: GET_CHILDREN_SUCCESS, result });
  } catch (error) {
    yield put({ type: GET_CHILDREN_FAILURE, error });
  }
}

export default children;
