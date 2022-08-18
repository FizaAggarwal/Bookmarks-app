import { takeLatest, put } from "redux-saga/effects";
import {
  SIGN_UP_REQUEST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ME_REQUEST,
  GET_ME_SUCCESS,
  GET_ME_FAILURE,
} from "../actions/types";

const url = "https://bookmarks-app-server.herokuapp.com/";

function* register(action) {
  let { name, email, password } = action.payload;
  let item = { name, email, password };
  if (email !== "" && password !== "" && name !== "") {
    let result = yield fetch(url.concat("register"), {
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
    let result = yield fetch(url.concat("login"), {
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

function* user() {
  if (localStorage.getItem("auth")) {
    var auth = JSON.parse(localStorage.getItem("auth"));
    try {
      let result = yield fetch(url.concat("me"), {
        method: "get",
        headers: { Authorization: `Bearer ${auth}` },
      });
      result = yield result.json();
      console.log(result);
      yield put({ type: GET_ME_SUCCESS, result });
    } catch (error) {
      yield put({ type: GET_ME_FAILURE }, error);
    }
  }
}

function* logout() {
  localStorage.clear();
  yield put({ type: LOGOUT_SUCCESS });
}

function* authSaga() {
  yield takeLatest(SIGN_UP_REQUEST, register);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(GET_ME_REQUEST, user);
}

export default authSaga;
