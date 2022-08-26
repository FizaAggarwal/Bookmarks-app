import { put } from "redux-saga/effects";

import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../../types/async_types";
import request from "../../requests";

function* register(action) {
  let { name, email, password } = action.payload;
  let item = { name, email, password };
  if (email !== "" && password !== "" && name !== "") {
    let result = yield request("register", "post", item);
    if ("token" in result) {
      yield put({ type: SIGNUP_SUCCESS });
      localStorage.setItem("auth", JSON.stringify(result.token));
    } else {
      yield put({ type: SIGNUP_FAILURE });
    }
  }
}

export default register;
