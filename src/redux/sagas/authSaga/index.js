import { takeLatest } from "redux-saga/effects";

import {
  SIGN_UP_REQUEST,
  LOGIN_REQUEST,
  GET_ME_REQUEST,
  LOGOUT_REQUEST,
} from "../../types/async_types";
import register from "./register";
import login from "./login";
import user from "./user";
import logout from "./logout";

function* authSaga() {
  yield takeLatest(SIGN_UP_REQUEST, register);
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(GET_ME_REQUEST, user);
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default authSaga;
