import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import profile from "../assets/profile.png";
import { authSelector } from "../redux/selectors";

const CustomBox = styled(Box)`
  display: flex;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px 10px auto auto;
`;

const CustommBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
  margin-right: 30px;
`;
const Loading = styled(Box)`
  color: #88868f;
  margin-top: 5px;
`;

const Name = styled(Box)`
  font-size: 15px;
  color: #474749;
  font-weight: bold;
`;

const Email = styled(Box)`
  font-size: 12px;
  color: #77757f;
`;

function Profile() {
  const initial = useSelector(authSelector);
  const { userLoading, user } = initial;

  return (
    <CustomBox>
      <Img src={profile} alt="profile" />
      <CustommBox>
        {userLoading === "inProgress" && <Loading>Loading...</Loading>}
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </CustommBox>
    </CustomBox>
  );
}

export default Profile;
