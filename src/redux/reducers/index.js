import authReducers from "./authReducers";
import folderReducers from "./folderReducers";

import { combineReducers } from "redux";

const allReducers = combineReducers({ authReducers, folderReducers });

export default allReducers;
