import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "@mui/material";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

import logo from "../assets/bookmarklogo.png";
import Folder from "./Folder";
import { logout } from "../redux/actions";
import { folderSelector } from "../redux/selectors";

const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const Img = styled.img`
  width: 55px;
  height: 55px;
  margin: 20px;
  position: absolute;
`;
const Heading = styled(Box)`
  margin: 0px auto auto 20px;
  font-size: 22px;
  font-weight: bold;
  position: relative;
  top: 80px;
`;
const CustomInput = styled(Input)`
  width: 200px;
  height: 40px;
 margin: 120px auto auto 10px;
  border: 1px solid #DCDCDC;
  border-radius: 12px;
  padding-left: 10px;
  color:"#91919F;
`;

const FolderBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  align-items: center;
  height: 300px;
`;
const FolderLoading = styled(HourglassTopIcon)`
  font-size: 70px;
  margin: auto;
  color: #88868f;
`;
const Favourites = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  margin: auto auto 0px 10px;
  color: #88868f;
  align-items: center;
  padding-right: 60px;
`;

const CustomFavourite = styled(FavoriteIcon)`
  padding-left: 18px;
  padding-right: 10px;
`;

const Logout = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  margin: auto auto 20px 10px;
  color: #88868f;
  align-items: center;
  padding-right: 60px;
`;

const CustomLogout = styled(LogoutIcon)`
  padding: 10px;
`;

function LeftBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initial = useSelector(folderSelector);
  const { folderLoading, folders } = initial;

  return (
    <LeftBox>
      <Box>
        <Img src={logo} alt="logo" />
        <Heading>BOOKMARK</Heading>
      </Box>
      <CustomInput placeholder="Search..." disableUnderline />
      <FolderBox>
        {folderLoading === "inProgress" && <FolderLoading />}
        {folders.length !== 0 &&
          folders.map((item) => <Folder key={item.id} item={item} />)}
      </FolderBox>
      <Favourites>
        <CustomFavourite />
        Favourites
      </Favourites>
      <Logout onClick={() => dispatch(logout(navigate))}>
        <CustomLogout />
        Log out
      </Logout>
    </LeftBox>
  );
}

export default LeftBar;
