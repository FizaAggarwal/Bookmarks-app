import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderIcon from "@mui/icons-material/Folder";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";

import {
  getBookmarks,
  getChildren,
  setParent,
  setBookmarkFolder,
  openModal,
} from "../redux/actions";
import { folderSelector } from "../redux/selectors";

const FolderButton = styled(Button)`
  font-size: 15px;
  padding-left: 2px;
  min-width: 30px;
`;

const ArrowButton = styled(Button)`
  min-width: 5px;
  padding: 2px;
`;

const CustomBox = styled(Box)`
  min-width: 200px;
  border-radius: 12px;
  color: #88868f;
  dispaly: flex;
`;

const CustomFolderIcon = styled(FolderIcon)`
  color: #5352ed;
  margin: 5px;
`;

const Loading = styled(Box)`
  color: #88868f;
`;

const NestedFolder = styled(Box)`
  color: #88868f;
  margin-left: 30px;
  display: flex;
`;

const Cross = styled(CloseIcon)`
  color: red;
  margin-right: 4px;
`;

const CustomButton = styled(Button)`
  min-width: 5px;
`;

const style = {
  borderRadius: "15px",
  backgroundColor: "#E4E3FF",
};

const NestedBox = styled(Box)`
  margin-left: 15px;
`;

function Folder(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { item } = props;
  const initial = useSelector(folderSelector);
  const { childLoading, folders, isOpen, selectedFolder } = initial;

  const folderClick = () => {
    !item.hasOwnProperty("cIds")
      ? dispatch(getChildren(item.id))
      : dispatch(setParent(item.id));
  };

  const bookmarkClick = () => {
    navigate(`/dashboard/${item.id}`);
    !item.hasOwnProperty("bIds")
      ? dispatch(getBookmarks(item.id))
      : dispatch(setBookmarkFolder(item.id));
  };

  return (
    <>
      <CustomBox style={selectedFolder === item.id ? style : {}}>
        <ArrowButton onClick={() => folderClick()}>
          {isOpen[item.id] ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
        </ArrowButton>
        <FolderButton onClick={() => bookmarkClick()}>
          <CustomFolderIcon />
          {item.name}
        </FolderButton>
        <CustomButton onClick={() => dispatch(openModal(item.id))}>
          <AddIcon />
        </CustomButton>
      </CustomBox>

      {isOpen[item.id] && (
        <NestedBox>
          {childLoading === item.id ? (
            <Loading>Loading...</Loading>
          ) : item.hasOwnProperty("cIds") && item.cIds.length > 0 ? (
            item.cIds.map((item) => <Folder key={item} item={folders[item]} />)
          ) : (
            <NestedFolder>
              <Cross />
              No children
            </NestedFolder>
          )}
        </NestedBox>
      )}
    </>
  );
}

export default Folder;
