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
import { logout, openModal } from "../redux/actions";
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
`;
const Heading = styled(Box)`
  margin: 0px auto 0px 20px;
  font-size: 22px;
  font-weight: bold;
`;
const CustomInput = styled(Input)`
  width: 200px;
  height: 40px;
  margin: 20px auto 0px 10px;
  border: 1px solid #DCDCDC;
  border-radius: 12px;
  padding-left: 10px;
  color:"#91919F;
`;

const FolderBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  height: 450px;
  overflow: auto;
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
  margin: auto auto 10px 10px;
  color: #88868f;
  align-items: center;
  padding-right: 60px;
`;

const CustomLogout = styled(LogoutIcon)`
  padding: 10px;
`;

const Create = styled(Button)`
  display: flex;
  color: #88868f;
  align-items: center;
  width: 200px;
  height: 40px;
  border-radius: 12px;
`;

function LeftBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initial = useSelector(folderSelector);
  const { folderLoading, folders, rootIds } = initial;

  return (
    <LeftBox>
      <Box>
        <Img src={logo} alt="logo" />
        <Heading>BOOKMARK</Heading>
      </Box>
      <CustomInput placeholder="Search..." disableUnderline />
      <FolderBox>
        {folderLoading === "inProgress" ? (
          <FolderLoading />
        ) : (
          rootIds.map((item) => <Folder item={folders[item]} key={item} />)
        )}
      </FolderBox>
      <Create onClick={() => dispatch(openModal(""))}>Create Folder</Create>
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
