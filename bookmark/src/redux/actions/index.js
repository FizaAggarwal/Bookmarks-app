import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SIGN_UP,
  LOGIN,
  GET_FOLDERS,
  LOGOUT,
  SET_SPINNER,
  GET_CHILDREN,
  GET_ME,
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

export const signUp = (name, email, password, url) => {
  return {
    type: SIGN_UP,
    payload: {
      name: name,
      email: email,
      password: password,
      url: url,
    },
  };
};

export const login = (email, password, url) => {
  return {
    type: LOGIN,
    payload: {
      email: email,
      password: password,
      url: url,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const getFolders = (url) => {
  return {
    type: GET_FOLDERS,
    payload: {
      url: url,
    },
  };
};

export const getMe = (url) => {
  return {
    type: GET_ME,
    payload: {
      url: url,
    },
  };
};

export const setSpinner = () => {
  return {
    type: SET_SPINNER,
  };
};

export const getChildren = (id) => {
  return {
    type: GET_CHILDREN,
    payload: {
      id: id,
    },
  };
};
