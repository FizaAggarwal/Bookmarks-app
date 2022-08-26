import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

import addlink from "../assets/addlink.png";
import { addBookmark, setLink } from "../redux/actions";
import { folderSelector } from "../redux/selectors";

const CustomBox = styled(Box)`
  display: flex;
  background-color: #5352ed;
  border-radius: 20px;
  margin: 20px 30px 0px 30px;
  color: #ffffff;
`;

const LeftBox = styled(Box)`
  margin: 20px 400px 0px 50px;
`;

const Heading = styled(Box)`
  font-size: 20px;
  font-weight: bold;
`;

const Url = styled(Box)`
  font-size: 13px;
  margin-top: 15px;
`;

const Link = styled(Input)`
  background-color: #6c6bf9;
  font-size: 15px;
  padding: 15px;
  border-radius: 15px;
  margin-top: 5px;
  width: 500px;
  color: #ffffff;
`;

const Bottom = styled(Box)`
  display: flex;
  margin-top: 20px;
`;

const Root = styled(Box)`
  background-color: #6c6bf9;
  font-size: 18px;
  padding: 15px 100px 15px 100px;
  border-radius: 15px;
`;

const Save = styled(Button)`
  background-color: #ffffff;
  color: #5352ed;
  font-size: 15px;
  padding: 15px 40px 15px 40px;
  border-radius: 15px;
  margin-left: 70px;
  :hover {
    color: #5352ed;
    background-color: #dcdcdc;
  }
`;

const Img = styled.img`
  height: 250px;
  width: 250px;
  margin: 10px 10px auto auto;
`;

function AddLink() {
  const dispatch = useDispatch();
  const initial = useSelector(folderSelector);
  const { link, selectedFolder, folders } = initial;
  return (
    <CustomBox>
      <LeftBox>
        <Heading>Add Quick Link</Heading>
        <Url>URL</Url>
        <Link
          disableUnderline
          placeholder="https://xd.adobe.com/view/c9822b2d-182f-4501-4126"
          onChange={(e) => dispatch(setLink(e.target.value))}
        ></Link>
        <Url>FOLDER</Url>
        <Bottom>
          <Root>
            {selectedFolder === "" ? "Root" : folders[selectedFolder].name}
          </Root>
          <Save onClick={() => dispatch(addBookmark(link, selectedFolder))}>
            Save
          </Save>
        </Bottom>
      </LeftBox>
      <Img src={addlink} alt="AddLink" />
    </CustomBox>
  );
}

export default AddLink;
