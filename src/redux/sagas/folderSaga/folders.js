import { put } from "redux-saga/effects";

import {
  GET_FOLDERS_SUCCESS,
  GET_FOLDERS_FAILURE,
} from "../../types/async_types";
import request from "../../requests";

function* folders() {
  if (localStorage.getItem("auth")) {
    try {
      let result = yield request("folders", "get", {});
      yield put({ type: GET_FOLDERS_SUCCESS, result });
    } catch (error) {
      yield put({ type: GET_FOLDERS_FAILURE, error });
    }
  }
}

export default folders;
