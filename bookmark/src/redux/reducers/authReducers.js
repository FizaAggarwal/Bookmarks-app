import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  LOGIN_SUCCESS,
  GET_FOLDERS_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  SET_SPINNER,
  LOGIN,
  SIGN_UP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_CHILDREN_SUCCESS,
  GET_ME_SUCCESS,
  GET_CHILDREN,
} from "../actions/types";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegister: "",
  folders: [],
  errorE: false,
  errorP: false,
  errorN: false,
  isLogin: false,
  disabled: false,
  user: {},
  parentId: "",
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.payload.name };

    case SET_EMAIL:
      return { ...state, email: action.payload.email };

    case SET_PASSWORD:
      return { ...state, password: action.payload.password };

    case LOGIN:
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
      return { ...state, isLogin: true, disabled: true };

    case LOGIN_FAILURE:
      return { ...state };

    case SIGN_UP:
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

    case GET_FOLDERS_SUCCESS:
      return { ...state, folders: action.result, spinner: false };

    case GET_ME_SUCCESS:
      return { ...state, user: action.result };

    case GET_CHILDREN:
      return { ...state, parentId: action.payload.id };

    case GET_CHILDREN_SUCCESS:
      const newArray = state.folders.map((item) =>
        item.id === state.parentId ? { ...item, children: action.result } : item
      );
      return { ...state, folders: newArray };

    case SET_SPINNER:
      return { ...state, spinner: true };

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
