import { put } from "redux-saga/effects";

import { LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../../types/async_types";

function* logout(action) {
  try {
    localStorage.clear();
    yield put({ type: LOGOUT_SUCCESS });
    action.navigate("/login");
  } catch (e) {
    yield put({ type: LOGOUT_FAILURE });
  }
}

export default logout;
