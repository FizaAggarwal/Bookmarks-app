import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFolders, getMe, getBookmarks } from "../redux/actions";
import { useEffect } from "react";
import Bookmark from "./Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { Input } from "@mui/material";
import LeftBar from "./LeftBar";
import Profile from "./Profile";
import AddLink from "./AddLink";

const Main = styled(Box)`
  display: grid;
  grid-template-columns: 15% 85%;
  height: 100vh;
  width: 100vw;
`;

const RightBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Middle = styled(Box)`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
`;

const Search = styled(Box)`
  display: flex;
  background-color: #dcdcdc;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid #f4f4f4;
  margin-left: 30px;
`;

const CustomSearch = styled(SearchIcon)`
  margin: 2px 6px 0px 2px;
`;

const CustomInput = styled(Input)`
  width: 250px;
`;

const Add = styled(Box)`
  color: #5352ed;
  border: 1px solid #5352ed;
  border-radius: 15px;
  display: flex;
  padding: 10px 20px 10px 20px;
  margin-right: 30px;
`;

const CustomAdd = styled(AddIcon)`
  color: #5352ed;
  margin-right: 5px;
`;

const Text = styled(Box)`
  font-weight: bold;
`;

const Bottom = styled(Box)`
  display: flex;
`;

const Loading = styled(Box)`
  margin: 100px auto auto auto;
  font-size: 30px;
  font-weight: bold;
  color: #88868f;
`;

function Dashboard() {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.folderReducers);
  const { bookmarkLoading, bookmarks } = initial;

  useEffect(() => {
    dispatch(getFolders());
    dispatch(getMe());
    dispatch(getBookmarks());
  }, [dispatch]);

  return (
    <>
      {localStorage.getItem("auth") ? (
        <Main>
          <LeftBar />
          <RightBox>
            <Profile />
            <AddLink />
            <Middle>
              <Search>
                <CustomSearch />
                <CustomInput placeholder="Search..." disableUnderline />
              </Search>
              <Add>
                <CustomAdd />
                <Text>ADD LINK</Text>
              </Add>
            </Middle>

            <Bottom>
              {bookmarkLoading && <Loading>Loading...</Loading>}
              {bookmarks.length !== 0 &&
                bookmarks.map((item) => <Bookmark key={item.id} item={item} />)}
            </Bottom>
          </RightBox>
        </Main>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default Dashboard;
