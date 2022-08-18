import { Box } from "@mui/system";
import styled from "@emotion/styled";
import profile from "../assets/profile.png";
import { useSelector } from "react-redux";

const CustomBox = styled(Box)`
  display: flex;
`;

const imgStyle = {
  width: "50px",
  height: "50px",
  margin: "10px 10px auto auto",
};

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
  const initial = useSelector((state) => state.authReducers);
  const { userLoading, user } = initial;

  return (
    <CustomBox>
      <img src={profile} alt="profile" style={imgStyle} />
      <CustommBox>
        {userLoading && <Loading>Loading...</Loading>}
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
      </CustommBox>
    </CustomBox>
  );
}

export default Profile;
