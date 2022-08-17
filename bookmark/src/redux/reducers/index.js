import authReducers from "./authReducers";

import { combineReducers } from "redux";

const allReducers = combineReducers({ authReducers });

export default allReducers;
