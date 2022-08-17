import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FolderIcon from "@mui/icons-material/Folder";
import { useDispatch } from "react-redux";
import { getChildren } from "../redux/actions";
import CloseIcon from "@mui/icons-material/Close";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

const CustomButton = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  color: #88868f;
  margin-top: 10px;
`;

function Folder(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Box>
        <CustomButton
          sx={{ pr: "60px" }}
          onClick={() => dispatch(getChildren(props.item.id))}
        >
          <ArrowRightIcon />
          <FolderIcon sx={{ color: "#5352ED", m: "5px" }} />
          {props.item.name}
        </CustomButton>
      </Box>
      {props.item.id === props.state.parentId &&
        props.item.hasOwnProperty("children") &&
        (props.item.children.length !== 0 ? (
          props.item.children.map((it) => (
            <div
              style={{
                color: "#88868f",
                marginLeft: "2px",
                display: "flex",
                marginTop: "3px",
              }}
            >
              <FolderOpenIcon sx={{ color: "#5352ED", mr: "6px" }} />
              <span>{it.name}</span>
            </div>
          ))
        ) : (
          <div
            style={{
              color: "#88868f",
              marginLeft: "2px",
              display: "flex",
              marginTop: "3px",
            }}
          >
            <CloseIcon sx={{ color: "red", mr: "4px" }} />
            <span>No children</span>
          </div>
        ))}
      {/* {props.state.children.length !== 0
        ? props.state.children.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))
        : ""} */}
    </>
  );
}

export default Folder;
