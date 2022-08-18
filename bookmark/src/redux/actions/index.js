import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SIGN_UP_REQUEST,
  LOGIN_REQUEST,
  GET_FOLDERS_REQUEST,
  LOGOUT_REQUEST,
  GET_CHILDREN_REQUEST,
  GET_ME_REQUEST,
  GET_BOOKAMRKS_REQUEST,
} from "./types";

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: {
      name: name,
    },
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: {
      email: email,
    },
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: {
      password: password,
    },
  };
};

export const signUp = (name, email, password) => {
  return {
    type: SIGN_UP_REQUEST,
    payload: {
      name: name,
      email: email,
      password: password,
    },
  };
};

export const login = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      email: email,
      password: password,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const getFolders = () => {
  return {
    type: GET_FOLDERS_REQUEST,
  };
};

export const getMe = () => {
  return {
    type: GET_ME_REQUEST,
  };
};

export const getBookmarks = () => {
  return {
    type: GET_BOOKAMRKS_REQUEST,
  };
};

export const getChildren = (id) => {
  return {
    type: GET_CHILDREN_REQUEST,
    payload: {
      id: id,
    },
  };
};
