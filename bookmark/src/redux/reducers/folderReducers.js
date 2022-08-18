import {
  GET_FOLDERS_SUCCESS,
  GET_CHILDREN_SUCCESS,
  GET_CHILDREN_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_BOOKAMRKS_REQUEST,
  GET_FOLDERS_REQUEST,
} from "../actions/types";

const initialState = {
  folders: [],
  folderLoading: false,
  bookmarks: [],
  bookmarkLoading: false,
  parentId: "",
  childLoading: false,
};

const folderReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLDERS_REQUEST:
      return { ...state, folderLoading: true };

    case GET_FOLDERS_SUCCESS:
      return { ...state, folders: action.result, folderLoading: false };

    case GET_BOOKAMRKS_REQUEST:
      return { ...state, bookmarkLoading: true };

    case GET_BOOKMARKS_SUCCESS: {
      return { ...state, bookmarks: action.result, bookmarkLoading: false };
    }

    case GET_CHILDREN_REQUEST:
      return { ...state, parentId: action.payload.id, childLoading: true };

    case GET_CHILDREN_SUCCESS:
      const newArray = state.folders.map((item) =>
        item.id === state.parentId ? { ...item, children: action.result } : item
      );
      return { ...state, folders: newArray, childLoading: false };

    default:
      return state;
  }
};

export default folderReducers;
