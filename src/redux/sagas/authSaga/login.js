import { put } from "redux-saga/effects";

import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../../types/async_types";
import request from "../../requests";

function* login(action) {
  let { email, password } = action.payload;
  let item = { email, password };
  if (email !== "" && password !== "") {
    let result = yield request("login", "post", item);
    if ("token" in result) {
      yield put({ type: LOGIN_SUCCESS });
      localStorage.setItem("auth", JSON.stringify(result.token));
    } else {
      yield put({ type: LOGIN_FAILURE });
    }
  }
}

export default login;
