import { Box } from "@mui/system";
import styled from "@emotion/styled";
import logo from "../assets/bookmarklogo.png";
import { Input } from "@mui/material";
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { getFolders, setSpinner, getMe } from "../redux/actions";
import { useEffect } from "react";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import Folder from "./Folder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import profile from "../assets/profile.png";
import addlink from "../assets/addlink.png";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const Main = styled(Box)`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
`;

const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

const RightBox = styled(Box)`
  display: flex;
  flex-direction: column;
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

const Logout = styled(Button)`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  margin: auto auto 20px 10px;
  color: #88868f;
  align-items: center;
  padding-right: 60px;
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

const FolderBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  align-items: center;
  height: 270px;
`;

const AddLink = styled(Box)`
  display: flex;
  background-color: #5352ed;
  border-radius: 20px;
  margin: 20px 30px 0px 30px;
  color: #ffffff;
`;

function Dashboard(props) {
  const dispatch = useDispatch();
  const url = "https://bookmarks-app-server.herokuapp.com/";

  useEffect(() => {
    dispatch(getFolders(url));
    dispatch(setSpinner());
    dispatch(getMe(url));
  }, [url, dispatch]);

  return (
    <>
      {localStorage.getItem("auth") ? (
        <Main>
          <LeftBox>
            <Box>
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "55px",
                  height: "55px",
                  margin: "20px",
                  position: "absolute",
                }}
              />
              <Heading>BOOKMARK</Heading>
            </Box>
            <CustomInput placeholder="Search..." disableUnderline={true} />
            <FolderBox>
              {props.spinner && (
                <HourglassTopIcon
                  sx={{ fontSize: "70px", m: "auto", color: "#88868f" }}
                />
              )}
              {props.folders.length !== 0 &&
                props.folders.map((item) => (
                  <Folder key={item.id} item={item} state={props.state} />
                ))}
            </FolderBox>
            <Favourites>
              <FavoriteIcon sx={{ pl: "18px;", pr: "10px" }} />
              Favourites
            </Favourites>
            <Logout onClick={props.logout}>
              <LogoutIcon sx={{ p: "10px;" }} />
              Log out
            </Logout>
          </LeftBox>
          <RightBox>
            <Box sx={{ display: "flex" }}>
              <img
                src={profile}
                alt="profile"
                style={{
                  width: "50px",
                  height: "50px",
                  margin: "10px 10px auto auto",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: "18px",
                  mr: "30px",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    color: "#474749",
                    fontWeight: "bold",
                  }}
                >
                  {props.state.user.name}
                </span>
                <span style={{ fontSize: "12px", color: "#77757F" }}>
                  {props.state.user.email}
                </span>
              </Box>
            </Box>
            <AddLink>
              <Box sx={{ mt: "20px", ml: "50px", mr: "400px" }}>
                <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                  Add Quick Link
                </div>
                <div style={{ fontSize: "13px", marginTop: "15px" }}>URL</div>
                <div
                  style={{
                    backgroundColor: "#6C6BF9",
                    fontSize: "15px",
                    padding: "15px",
                    borderRadius: "15px",
                    marginTop: "5px",
                  }}
                >
                  https://xd.adobe.com/view/c9822b2d-182f-4501-4126
                </div>
                <div style={{ fontSize: "13px", marginTop: "15px" }}>
                  FOLDER
                </div>
                <div style={{ marginTop: "20px" }}>
                  <span
                    style={{
                      backgroundColor: "#6C6BF9",
                      fontSize: "15px",
                      padding: "15px 100px 15px 100px",
                      borderRadius: "15px",
                    }}
                  >
                    Root
                  </span>
                  <span
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#5352ED",
                      fontSize: "15px",
                      padding: "15px 40px 15px 40px",
                      borderRadius: "15px",
                      marginLeft: "70px",
                    }}
                  >
                    Save
                  </span>
                </div>
              </Box>
              <img
                src={addlink}
                alt="AddLink"
                style={{
                  height: "250px",
                  width: "250px",
                  margin: "10px 10px auto auto",
                }}
              />
            </AddLink>
            <div
              style={{
                display: "flex",
                marginTop: "30px",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#DCDCDC",
                  borderRadius: "15px",
                  padding: "5px",
                  border: "1px solid #F4F4F4",
                  marginLeft: "30px",
                }}
              >
                <SearchIcon sx={{ mt: "2px", ml: "2px", mr: "6px" }} />
                <Input
                  placeholder="Search..."
                  disableUnderline
                  sx={{ width: "250px" }}
                />
              </div>
              <div
                style={{
                  color: "#5352ED",
                  border: "1px solid #5352ED",
                  borderRadius: "15px",
                  display: "flex",
                  padding: "10px 20px 10px 20px",
                  marginLeft: "450px",
                }}
              >
                <AddIcon sx={{ color: "#5352ED", mr: "5px" }} />
                <span style={{ fontWeight: "bold" }}>ADD LINK</span>
              </div>
              <div>icon</div>
            </div>
          </RightBox>
        </Main>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default Dashboard;
