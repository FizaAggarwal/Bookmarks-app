import {
  GET_FOLDERS_SUCCESS,
  GET_CHILDREN_SUCCESS,
  GET_CHILDREN_REQUEST,
  GET_BOOKMARKS_SUCCESS,
  GET_BOOKMARKS_REQUEST,
  GET_FOLDERS_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  GET_CURRENT_FOLDER_SUCCESS,
  CREATE_FOLDER_SUCCESS,
  CREATE_FOLDER_REQUEST,
  ADD_BOOKMARK_REQUEST,
} from "../types/async_types";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_BOOKMARK_FOLDER,
  SET_FOLDER_NAME,
  SET_LINK,
  SET_PARENT_ID,
} from "../types/sync_types";

const initialState = {
  folders: {},
  folderLoading: "initial",
  bookmarks: {},
  bookmarkLoading: "initial",
  parentId: "",
  childLoading: "initial",
  link: "",
  rootIds: [],
  bookmarkFolder: "",
  rootBookmarks: [],
  isOpen: {},
  create: false,
  folderName: "",
  currentFolder: {},
  selectedFolder: "",
  createFolderLoading: "initial",
  addBookmarkLoading: "initial",
  createFolderParent: "",
};

const folderReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_FOLDERS_REQUEST:
      return { ...state, folderLoading: "inProgress" };

    case GET_FOLDERS_SUCCESS:
      const temp = [];
      action.result.map((item) => temp.push(item.id));
      const obj = {};
      action.result.map((item) => (obj[item.id] = item));
      return {
        ...state,
        folderLoading: "success",
        rootIds: temp,
        folders: obj,
      };

    case GET_BOOKMARKS_REQUEST:
      return {
        ...state,
        bookmarkLoading: "inProgress",
        bookmarkFolder: action.payload.id,
        selectedFolder: action.payload.id,
      };

    case GET_BOOKMARKS_SUCCESS: {
      const arr = [];
      const bid = [];
      action.result.map((item) =>
        state.bookmarkFolder === "" ? arr.push(item.id) : bid.push(item.id)
      );
      const object = {};
      action.result.map((item) => (object[item.id] = item));
      if (state.bookmarkFolder !== "") {
        state.folders[state.bookmarkFolder].bIds = bid;
      }
      return {
        ...state,
        bookmarks: { ...state.bookmarks, ...object },
        bookmarkLoading: "success",
        rootBookmarks: arr,
      };
    }

    case SET_LINK:
      return { ...state, link: action.payload.link };

    case ADD_BOOKMARK_REQUEST:
      return { ...state, addBookmarkLoading: "inProgress" };

    case ADD_BOOKMARK_SUCCESS: {
      state.bookmarks[action.result.id] = action.result;
      if (state.selectedFolder === "") {
        state.rootBookmarks.push(action.result.id);
      } else {
        state.folders[state.selectedFolder].bIds.push(action.result.id);
      }
      return { ...state, addBookmarkLoading: "success" };
    }

    case GET_CHILDREN_REQUEST:
      state.isOpen.hasOwnProperty(action.payload.id)
        ? (state.isOpen[action.payload.id] = !state.isOpen[action.payload.id])
        : (state.isOpen[action.payload.id] = true);
      return {
        ...state,
        parentId: action.payload.id,
        childLoading: action.payload.id,
      };

    case GET_CHILDREN_SUCCESS:
      action.result.map((item) => (state.folders[item.id] = item));
      const newArray = [];
      action.result.map((item) => newArray.push(item.id));
      state.folders[state.parentId].cIds = newArray;
      return { ...state, childLoading: "success" };

    case SET_PARENT_ID:
      state.isOpen.hasOwnProperty(action.payload.id)
        ? (state.isOpen[action.payload.id] = !state.isOpen[action.payload.id])
        : (state.isOpen[action.payload.id] = true);
      return { ...state, parentId: action.payload.id };

    case SET_BOOKMARK_FOLDER:
      return {
        ...state,
        bookmarkFolder: action.payload.id,
        selectedFolder: action.payload.id,
      };

    case GET_CURRENT_FOLDER_SUCCESS:
      if (!state.folders.hasOwnProperty(action.result.id)) {
        state.folders[action.result.id] = action.result;
      }
      action.result.children.map((item) => (state.folders[item.id] = item));
      var array = [];
      action.result.children.map((item) => array.push(item.id));
      state.folders[action.result.id].cIds = array;
      return {
        ...state,
        parentId: action.result.id,
        currentFolder: action.result,
      };

    case OPEN_MODAL:
      return { ...state, create: true, createFolderParent: action.payload.id };

    case CLOSE_MODAL:
      return { ...state, create: false };

    case SET_FOLDER_NAME:
      return { ...state, folderName: action.payload.name };

    case CREATE_FOLDER_REQUEST:
      return { ...state, createFolderLoading: "inProgress", create: false };

    case CREATE_FOLDER_SUCCESS:
      state.folders[action.result.id] = action.result;
      if (state.createFolderParent === "") {
        state.rootIds.push(action.result.id);
      } else {
        state.folders[state.createFolderParent].cIds.push(action.result.id);
      }
      return { ...state, createFolderLoading: "success" };

    default:
      return state;
  }
};

export default folderReducers;
