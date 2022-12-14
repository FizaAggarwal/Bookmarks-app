import {
  SIGN_UP_REQUEST,
  LOGIN_REQUEST,
  GET_FOLDERS_REQUEST,
  LOGOUT_REQUEST,
  GET_CHILDREN_REQUEST,
  GET_ME_REQUEST,
  GET_BOOKMARKS_REQUEST,
  ADD_BOOKMARK_REQUEST,
  GET_CURRENT_FOLDER_REQUEST,
  CREATE_FOLDER_REQUEST,
} from "../types/async_types";
import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_LINK,
  SET_PARENT_ID,
  SET_BOOKMARK_FOLDER,
  OPEN_MODAL,
  SET_FOLDER_NAME,
  CLOSE_MODAL,
} from "../types/sync_types";

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

export const setLink = (link) => {
  return {
    type: SET_LINK,
    payload: {
      link: link,
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

export const logout = (navigate) => {
  return {
    type: LOGOUT_REQUEST,
    navigate: navigate,
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

export const getBookmarks = (id) => {
  return {
    type: GET_BOOKMARKS_REQUEST,
    payload: {
      id: id,
    },
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

export const addBookmark = (link, selectedFolder) => {
  return {
    type: ADD_BOOKMARK_REQUEST,
    payload: {
      link: link,
      folder: selectedFolder,
    },
  };
};

export const setParent = (id) => {
  return {
    type: SET_PARENT_ID,
    payload: {
      id: id,
    },
  };
};

export const setBookmarkFolder = (id) => {
  return {
    type: SET_BOOKMARK_FOLDER,
    payload: {
      id: id,
    },
  };
};

export const getCurrent = (id) => {
  return {
    type: GET_CURRENT_FOLDER_REQUEST,
    payload: {
      id: id,
    },
  };
};

export const openModal = (id) => {
  return {
    type: OPEN_MODAL,
    payload: {
      id: id,
    },
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};

export const setFolderName = (name) => {
  return {
    type: SET_FOLDER_NAME,
    payload: {
      name: name,
    },
  };
};

export const createFolder = (name, createFolderParent) => {
  return {
    type: CREATE_FOLDER_REQUEST,
    payload: {
      name: name,
      id: createFolderParent,
    },
  };
};
