import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setPassword,
  signUp,
  login,
  logout,
} from "./redux/actions";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.authReducers);
  const { name, email, password, isLogin, folders, spinner } = initial;
  const url = "https://bookmarks-app-server.herokuapp.com/";

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              localStorage.getItem("auth") ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                folders={folders}
                login={isLogin}
                content={folders}
                logout={() => dispatch(logout())}
                spinner={spinner}
                state={initial}
              />
            }
          />
          {/* <Route
            path="/dashboard"
            element={
              isLogin ? (
                <Dashboard />
              ) : (
                <Login
                  email={(e) => dispatch(setEmail(e.target.value))}
                  password={(e) => dispatch(setPassword(e.target.value))}
                  button={() => dispatch(login(email, password, url))}
                  state={initial}
                />
              )
            }
          /> */}
          <Route
            path="/login"
            element={
              <Login
                email={(e) => dispatch(setEmail(e.target.value))}
                password={(e) => dispatch(setPassword(e.target.value))}
                button={() => dispatch(login(email, password, url))}
                state={initial}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <SignUp
                name={(e) => dispatch(setName(e.target.value))}
                email={(e) => dispatch(setEmail(e.target.value))}
                password={(e) => dispatch(setPassword(e.target.value))}
                button={() => dispatch(signUp(name, email, password, url))}
                state={initial}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
