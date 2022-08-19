import {
  GET_FOLDERS_SUCCESS,
  GET_CHILDREN_SUCCESS,
  GET_CHILDREN_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_BOOKMARKS_REQUEST,
  GET_FOLDERS_REQUEST,
  LOGOUT_SUCCESS,
} from "../types/async_types";

const initialState = {
  folders: [],
  folderLoading: "initial",
  bookmarks: [],
  bookmarkLoading: "initial",
  parentId: "",
  childLoading: "initial",
};

const folderReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLDERS_REQUEST:
      return { ...state, folderLoading: "inProgress" };

    case GET_FOLDERS_SUCCESS:
      return { ...state, folders: action.result, folderLoading: "success" };

    case GET_BOOKMARKS_REQUEST:
      return { ...state, bookmarkLoading: "inProgress" };

    case GET_BOOKMARKS_SUCCESS: {
      return { ...state, bookmarks: action.result, bookmarkLoading: "success" };
    }

    case GET_CHILDREN_REQUEST:
      return {
        ...state,
        parentId: action.payload.id,
        childLoading: "inProgress",
      };

    case GET_CHILDREN_SUCCESS:
      const newArray = state.folders.map((item) =>
        item.id === state.parentId ? { ...item, children: action.result } : item
      );
      return { ...state, folders: newArray, childLoading: "success" };

    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default folderReducers;
