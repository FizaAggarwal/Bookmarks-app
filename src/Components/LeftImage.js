import { Box } from "@mui/system";
import styled from "@emotion/styled";

import image from "../assets/login.png";

const LeftBox = styled(Box)`
  background-color: #5352ed;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

const Heading1 = styled(Box)`
  margin: 60px auto 0px 50px;
  font-size: 40px;
`;

const Heading2 = styled(Box)`
  margin: 0px auto 0px 50px;
  font-size: 40px;
  font-weight: bold;
`;

const Img = styled.img`
  width: 600px;
  height: 600px;
  margin-left: 50px;
  position: absolute;
  top: 70px;
`;

function LeftImage() {
  return (
    <LeftBox>
      <Heading1>Welcome,</Heading1>
      <Heading2>Get Started</Heading2>
      <Img src={image} alt="description" />
    </LeftBox>
  );
}

export default LeftImage;
