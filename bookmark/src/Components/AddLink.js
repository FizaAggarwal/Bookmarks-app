import { Box } from "@mui/system";
import styled from "@emotion/styled";
import addlink from "../assets/addlink.png";

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

const Link = styled(Box)`
background-color: #6C6BF9,
font-size:15px;
padding: 15px;
border-radius:15px;
margin-top:5px;
`;

const Bottom = styled(Box)`
  display: flex;
  margin-top: 20px;
`;

const Root = styled(Box)`
  background-color: #6c6bf9;
  font-size: 15px;
  padding: 15px 100px 15px 100px;
  border-radius: 15px;
`;

const Save = styled(Box)`
  background-color: #ffffff;
  color: #5352ed;
  font-size: 15px;
  padding: 15px 40px 15px 40px;
  border-radius: 15px;
  margin-left: 70px;
`;

const imgStyle = {
  height: "250px",
  width: "250px",
  margin: "10px 10px auto auto",
};

function AddLink() {
  return (
    <CustomBox>
      <LeftBox>
        <Heading>Add Quick Link</Heading>
        <Url>URL</Url>
        <Link>https://xd.adobe.com/view/c9822b2d-182f-4501-4126</Link>
        <Url>FOLDER</Url>
        <Bottom>
          <Root>Root</Root>
          <Save>Save</Save>
        </Bottom>
      </LeftBox>
      <img src={addlink} alt="AddLink" style={imgStyle} />
    </CustomBox>
  );
}

export default AddLink;
