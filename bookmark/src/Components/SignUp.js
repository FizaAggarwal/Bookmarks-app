import { Link, Navigate } from "react-router-dom";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import image from "../assets/login.png";
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPassword, signUp } from "../redux/actions";

const Main = styled(Box)`
  display: grid;
  grid-template-columns: 30% 70%;
  height: 100vh;
  width: 100vw;
`;
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

const RightBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CustomInput = styled(Input)`
  width: 350px;
  height: 50px;
  border: 1px solid #f1f1fa;
  border-radius: 12px;
  padding-left: 20px;
  color: #91919f;
  margin-top: 40px;
  margin-left: 200px;
`;

const CustomButton = styled(Button)`
  width: 350px;
  height: 50px;
  border-radius: 12px;
  background-color: #5352ed;
  color: #ffffff;
  margin-top: 40px;
  margin-left: 200px;
  :hover {
    color: black;
    background-color: grey;
  }
`;
const CustomBox = styled(Box)`
  margin-top: 40px;
  margin-left: 200px;
  display: flex;
`;

const ErrorBox = styled(Box)`
  margin-top: 5px;
  color: red;
  font-size: 13px;
`;

const imgStyle = {
  width: "600px",
  height: "600px",
  marginLeft: "50px",
  position: "absolute",
  top: "70px",
};

const Name = styled(Input)`
  width: 350px;
  height: 50px;
  border: 1px solid #f1f1fa;
  border-radius: 12px;
  padding-left: 20px;
  color: #91919f;
  margin-top: 150px;
  margin-left: 200px;
`;

const Account = styled(Box)`
  color: #91919f;
`;

function SignUp() {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state.authReducers);
  const { errorN, errorE, errorP, name, email, password, disabled } = initial;

  return (
    <>
      {localStorage.getItem("auth") ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <Main>
          <LeftBox>
            <Heading1>Welcome,</Heading1>
            <Heading2>Get Started</Heading2>
            <img src={image} alt="description" style={imgStyle} />
          </LeftBox>
          <RightBox>
            <Name
              placeholder="Name"
              onChange={(e) => dispatch(setName(e.target.value))}
              disableUnderline
              required
            />
            {errorN && <ErrorBox>Name is required</ErrorBox>}
            <CustomInput
              placeholder="Email"
              onChange={(e) => dispatch(setEmail(e.target.value))}
              disableUnderline
              required
            />
            {errorE && <ErrorBox>Email is required</ErrorBox>}
            <CustomInput
              placeholder="Password"
              onChange={(e) => dispatch(setPassword(e.target.value))}
              disableUnderline
              required
            />
            {errorP && <ErrorBox>Password is required</ErrorBox>}
            <CustomButton
              onClick={() => dispatch(signUp(name, email, password))}
              disabled={disabled}
            >
              {disabled ? "Loading..." : "SignUp"}
            </CustomButton>
            <CustomBox>
              <Account>Already have an account? </Account>
              <Link to="/login" style={{ color: "#5352ed" }}>
                Login
              </Link>
            </CustomBox>
          </RightBox>
        </Main>
      )}
    </>
  );
}

export default SignUp;
