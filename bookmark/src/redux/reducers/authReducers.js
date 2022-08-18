import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_ME_SUCCESS,
  GET_ME_REQUEST,
} from "../actions/types";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegister: "",
  errorE: false,
  errorP: false,
  errorN: false,
  disabled: false,
  user: {},
  userLoading: false,
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
      if (state.email === "") {
        state.errorE = true;
      }
      if (state.password === "") {
        state.errorP = true;
      }
      state.disabled =
        state.email === "" || state.password === "" ? false : true;
      return { ...state };

    case LOGIN_SUCCESS:
      return { ...state, disabled: true };

    case LOGIN_FAILURE:
      return { ...state };

    case SIGN_UP_REQUEST:
      if (state.email === "") {
        state.errorE = true;
      }
      if (state.password === "") {
        state.errorP = true;
      }
      if (state.name === "") {
        state.errorN = true;
      }
      state.disabled =
        state.email === "" || state.password === "" || state.name === ""
          ? false
          : true;
      return { ...state };

    case SIGNUP_SUCCESS:
      return { ...state, isLogin: true, disabled: true };

    case SIGNUP_FAILURE:
      return { ...state };

    case GET_ME_REQUEST: {
      return { ...state, userLoading: true };
    }

    case GET_ME_SUCCESS:
      return { ...state, user: action.result, userLoading: false };

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
        errorE: state.email === "" ? true : false,
        errorP: state.password === "" ? true : false,
        disabled: false,
      };

    default:
      return state;
  }
};

export default authReducers;
