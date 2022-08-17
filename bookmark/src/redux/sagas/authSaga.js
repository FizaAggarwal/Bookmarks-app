import { takeLatest, put } from "redux-saga/effects";
import {
  SIGN_UP,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ME,
  GET_ME_SUCCESS,
} from "../actions/types";

function* register(action) {
  let { name, email, password } = action.payload;
  let item = { name, email, password };
  if (email !== "" && password !== "" && name !== "") {
    let result = yield fetch(action.payload.url.concat("register"), {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    result = yield result.json();
    console.log(result);
    if ("token" in result) {
      yield put({ type: SIGNUP_SUCCESS });
      localStorage.setItem("auth", JSON.stringify(result.token));
    } else {
      yield put({ type: SIGNUP_FAILURE });
    }
  }
}

function* login(action) {
  let { email, password } = action.payload;
  let item = { email, password };
  if (email !== "" && password !== "") {
    let result = yield fetch(action.payload.url.concat("login"), {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    result = yield result.json();
    console.log(result);
    if ("token" in result) {
      yield put({ type: LOGIN_SUCCESS });
      localStorage.setItem("auth", JSON.stringify(result.token));
    } else {
      yield put({ type: LOGIN_FAILURE });
    }
  }
}

function* user(action) {
  if (localStorage.getItem("auth")) {
    var auth = JSON.parse(localStorage.getItem("auth"));
    let result = yield fetch(action.payload.url.concat("me"), {
      method: "get",
      headers: { Authorization: `Bearer ${auth}` },
    });
    result = yield result.json();
    console.log(result);
    yield put({ type: GET_ME_SUCCESS, result });
  }
}

function* logout() {
  localStorage.clear();
  yield put({ type: LOGOUT_SUCCESS });
}

function* authSaga() {
  yield takeLatest(SIGN_UP, register);
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(GET_ME, user);
}

export default authSaga;
