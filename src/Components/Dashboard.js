import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Input } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import LeftBar from "./LeftBar";
import Profile from "./Profile";
import AddLink from "./AddLink";
import {
  getFolders,
  getMe,
  getBookmarks,
  setFolderName,
  createFolder,
  closeModal,
} from "../redux/actions";
import Bookmark from "./Bookmark";
import { folderSelector } from "../redux/selectors";

const Main = styled(Box)`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;

const RightBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Middle = styled(Box)`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const Search = styled(Box)`
  display: flex;
  background-color: #dcdcdc;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid #f4f4f4;
  margin-left: 30px;
`;

const CustomSearch = styled(SearchIcon)`
  margin: 2px 6px 0px 2px;
`;

const CustomInput = styled(Input)`
  width: 250px;
`;

const Add = styled(Box)`
  color: #5352ed;
  border: 1px solid #5352ed;
  border-radius: 15px;
  display: flex;
  padding: 10px 20px 10px 20px;
  margin-right: 30px;
`;

const CustomAdd = styled(AddIcon)`
  color: #5352ed;
  margin-right: 5px;
`;

const Text = styled(Box)`
  font-weight: bold;
`;

const Bottom = styled(Box)`
  display: flex;
  overflow: auto;
`;

const Loading = styled(Box)`
  margin: 100px auto auto auto;
  font-size: 30px;
  font-weight: bold;
  color: #88868f;
`;

const ModalBox = styled(Box)`
  position: absolute;
  top: 30%;
  left: 40%;
  background-color: white;
  height: 250px;
  width: 250px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const FolderName = styled(Input)`
  color: #6c6bf9;
  border: 1px solid #6c6bf9;
  border-radius: 10px;
  width: 200px;
  margin: 10px 0px 0px 20px;
  padding: 5px;
`;

const CustomButton = styled(Button)`
  background-color: #6c6bf9;
  color: white;
  border-radius: 15px;
  margin: 40px auto 0px auto;
  width: 100px;
  :hover {
    background-color: #808080;
  }
`;

const Heading = styled(Box)`
  margin: 30px 0px 0px 20px;
  font-weight: bold;
`;
const PlaceHolder = styled(Box)`
  color: #808081;
  margin: 30px 0px 0px 20px;
`;

const LoadingBox = styled(Box)`
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  font-size: 50px;
`;

const CustomBox = styled(Box)`
  display: flex;
`;

const CloseButton = styled(Button)`
  margin: 20px 0px 0px 30px;
  color: black;
`;

function Dashboard() {
  const dispatch = useDispatch();
  const initial = useSelector(folderSelector);
  const {
    bookmarkLoading,
    bookmarks,
    folders,
    bookmarkFolder,
    rootBookmarks,
    create,
    folderName,
    createFolderLoading,
    addBookmarkLoading,
    createFolderParent,
  } = initial;
  const current = window.location.pathname.slice(11);

  useEffect(() => {
    dispatch(getFolders());
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    Object.keys(folders).length !== 0 && dispatch(getBookmarks(current));
  }, [dispatch, current, folders]);

  return (
    <>
      {localStorage.getItem("auth") ? (
        <Main>
          <LeftBar />
          <Modal open={create}>
            <ModalBox>
              <CustomBox>
                <Heading>CREATE FOLDER</Heading>
                <CloseButton onClick={() => dispatch(closeModal())}>
                  <CloseIcon />
                </CloseButton>
              </CustomBox>
              <PlaceHolder>Folder Name</PlaceHolder>
              <FolderName
                placeholder="Enter Folder Name"
                disableUnderline
                onChange={(e) => dispatch(setFolderName(e.target.value))}
              />
              <CustomButton
                onClick={() =>
                  dispatch(createFolder(folderName, createFolderParent))
                }
              >
                Create
              </CustomButton>
            </ModalBox>
          </Modal>
          <Modal open={createFolderLoading === "inProgress"}>
            <LoadingBox>Loading...</LoadingBox>
          </Modal>
          <Modal open={addBookmarkLoading === "inProgress"}>
            <LoadingBox>Loading...</LoadingBox>
          </Modal>
          <RightBox>
            <Profile />
            <AddLink />
            <Middle>
              <Search>
                <CustomSearch />
                <CustomInput placeholder="Search..." disableUnderline />
              </Search>
              <Add>
                <CustomAdd />
                <Text>ADD LINK</Text>
              </Add>
            </Middle>

            <Bottom>
              {bookmarkLoading === "inProgress" ? (
                <Loading>Loading...</Loading>
              ) : bookmarkFolder === "" ? (
                rootBookmarks.length !== 0 ? (
                  rootBookmarks.map((item) => (
                    <Bookmark key={item} item={bookmarks[item]} />
                  ))
                ) : (
                  <Loading>No Bookmarks</Loading>
                )
              ) : folders[bookmarkFolder].bIds.length !== 0 ? (
                folders[bookmarkFolder].bIds.map((item) => (
                  <Bookmark key={item} item={bookmarks[item]} />
                ))
              ) : (
                <Loading>No Bookmarks</Loading>
              )}
            </Bottom>
          </RightBox>
        </Main>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default Dashboard;
