import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ME_SUCCESS,
  GET_ME_REQUEST,
} from "../types/async_types";
import { SET_NAME, SET_EMAIL, SET_PASSWORD } from "../types/sync_types";

const initialState = {
  name: "",
  email: "",
  password: "",
  errorEmail: false,
  errorPassword: false,
  errorName: false,
  mainError: "",
  loginLoading: "initial",
  user: {},
  userLoading: "initial",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload.name };

    case SET_EMAIL:
      return { ...state, email: action.payload.email };

    case SET_PASSWORD:
      return { ...state, password: action.payload.password };

    case LOGIN_REQUEST:
      return {
        ...state,
        errorEmail: state.email === "",
        errorPassword: state.password === "",
        loginLoading:
          state.email === "" || state.password === "" ? "error" : "inProgress",
      };

    case LOGIN_SUCCESS:
      return { ...state, loginLoading: "success" };

    case LOGIN_FAILURE:
      return { ...state, mainError: "Login Error" };

    case SIGN_UP_REQUEST:
      return {
        ...state,
        errorEmail: state.email === "",
        errorPassword: state.password === "",
        errorName: state.name === "",
        loginLoading:
          state.email === "" || state.password === "" || state.name === ""
            ? "error"
            : "inProgress",
      };

    case SIGNUP_SUCCESS:
      return { ...state, loginLoading: "success" };

    case SIGNUP_FAILURE:
      return { ...state };

    case GET_ME_REQUEST: {
      return { ...state, userLoading: "inProgress" };
    }

    case GET_ME_SUCCESS:
      return { ...state, user: action.result, userLoading: "success" };

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default authReducers;
