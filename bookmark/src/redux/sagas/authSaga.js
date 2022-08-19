import { put } from "redux-saga/effects";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ME_SUCCESS,
  GET_ME_FAILURE,
  LOGOUT_FAILURE,
} from "../types/async_types";
import request from "../requests";

export function* register(action) {
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

export function* login(action) {
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

export function* user() {
  if (localStorage.getItem("auth")) {
    try {
      let result = yield request("me", "get", {});
      yield put({ type: GET_ME_SUCCESS, result });
    } catch (error) {
      yield put({ type: GET_ME_FAILURE }, error);
    }
  }
}

export function* logout(action) {
  try {
    localStorage.clear();
    yield put({ type: LOGOUT_SUCCESS });
    action.navigate("/login");
  } catch (e) {
    yield put({ type: LOGOUT_FAILURE });
  }
}
