import { put } from "redux-saga/effects";

import { GET_ME_SUCCESS, GET_ME_FAILURE } from "../../types/async_types";
import request from "../../requests";

function* user() {
  if (localStorage.getItem("auth")) {
    try {
      let result = yield request("me", "get", {});
      yield put({ type: GET_ME_SUCCESS, result });
    } catch (error) {
      yield put({ type: GET_ME_FAILURE }, error);
    }
  }
}

export default user;
