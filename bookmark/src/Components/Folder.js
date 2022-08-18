import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderIcon from "@mui/icons-material/Folder";
import { useDispatch, useSelector } from "react-redux";
import { getChildren } from "../redux/actions";
import CloseIcon from "@mui/icons-material/Close";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const CustomButton = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  color: #88868f;
  margin-top: 10px;
  padding-right: 60px;
`;

const CustomFolderIcon = styled(FolderIcon)`
  color: #5352ed;
  margin: 5px;
`;

const Loading = styled(Box)`
  color: #88868f;
`;

const NestedFolder = styled(Button)`
  color: #88868f;
  margin-left: 2px;
  display: flex;
  margin-top: 3px;
`;

const CustomFolderOpen = styled(FolderOpenIcon)`
  color: #5352ed;
  margin-right: 6px;
`;

const Cross = styled(CloseIcon)`
  color: red;
  margin-right: 4px;
`;

function Folder(props) {
  const dispatch = useDispatch();
  const { item } = props;
  const initial = useSelector((state) => state.folderReducers);
  const { parentId, childLoading } = initial;

  return (
    <>
      <Box>
        <CustomButton onClick={() => dispatch(getChildren(item.id))}>
          <ArrowRightIcon />
          <CustomFolderIcon />
          {item.name}
        </CustomButton>
      </Box>
      {item.id === parentId && childLoading ? (
        <Loading>Loading...</Loading>
      ) : (
        item.hasOwnProperty("children") &&
        (item.children.length !== 0 ? (
          item.children.map((it) => (
            <NestedFolder>
              <CustomFolderOpen />
              <Box>{it.name}</Box>
            </NestedFolder>
          ))
        ) : (
          <NestedFolder>
            <Cross />
            <Box>No children</Box>
          </NestedFolder>
        ))
      )}
    </>
  );
}

export default Folder;
