import { put } from "redux-saga/effects";

import {
  GET_FOLDERS_SUCCESS,
  GET_CHILDREN_SUCCESS,
  GET_BOOKMARKS_SUCCESS,
  GET_FOLDERS_FAILURE,
  GET_CHILDREN_FAILURE,
  GET_BOOKMARKS_FAILURE,
} from "../types/async_types";
import request from "../requests";

export function* folders() {
  if (localStorage.getItem("auth")) {
    try {
      let result = yield request("folders", "get", {});
      yield put({ type: GET_FOLDERS_SUCCESS, result });
    } catch (error) {
      yield put({ type: GET_FOLDERS_FAILURE, error });
    }
  }
}

export function* children(action) {
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

export function* bookmarks() {
  try {
    let result = yield request("folder-bookmarks", "get", {});
    yield put({ type: GET_BOOKMARKS_SUCCESS, result });
  } catch (error) {
    yield put({ type: GET_BOOKMARKS_FAILURE, error });
  }
}
