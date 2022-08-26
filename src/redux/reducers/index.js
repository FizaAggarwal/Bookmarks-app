import authReducers from "./authReducers";
import folderReducers from "./folderReducers";

import { combineReducers } from "redux";
import { LOGOUT_SUCCESS } from "../types/async_types";

const rootReducer = combineReducers({ authReducers, folderReducers });

const allReducers = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    state = undefined;
  }

  return rootReducer(state, action);
};

export default allReducers;
