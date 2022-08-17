import { Link, Navigate } from "react-router-dom";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import image from "../assets/login.png";
import { Input } from "@mui/material";
import { Button } from "@mui/material";

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
  color:"#91919F;
`;

const CustomButton = styled(Button)`
  width: 350px;
  height: 50px;
  border-radius: 12px;
  background-color: #5352ed;
  color: #ffffff;
  margin-top: 40px;
  margin-left: 200px;
`;
const CustomBox = styled(Box)`
  margin-top: 40px;
  margin-left: 200px;
`;

const ErrorBox = styled(Box)`
  margin-top: 5px;
  color: red;
  font-size: 13px;
`;

function Login(props) {
  return (
    <>
      {localStorage.getItem("auth") ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <Main>
          <LeftBox>
            <Heading1>Welcome,</Heading1>
            <Heading2>Get Started</Heading2>
            <img
              src={image}
              alt="description"
              style={{
                width: "600px",
                height: "600px",
                marginLeft: "50px",
                position: "absolute",
                top: "70px",
              }}
            />
          </LeftBox>
          <RightBox>
            <CustomInput
              sx={{ mt: "200px", ml: "200px" }}
              placeholder="Email"
              onChange={props.email}
              disableUnderline={true}
              required={true}
            />
            {props.state.errorE === true && (
              <ErrorBox>Email is required</ErrorBox>
            )}
            <CustomInput
              sx={{ mt: "40px", ml: "200px" }}
              placeholder="Password"
              onChange={props.password}
              disableUnderline={true}
              required={true}
            />
            {props.state.errorP === true && (
              <ErrorBox>Password is required</ErrorBox>
            )}
            <CustomButton
              onClick={props.button}
              sx={{
                "&:hover": {
                  color: "black",
                  backgroundColor: "gray",
                },
              }}
              disabled={props.state.disabled}
            >
              {props.state.disabled ? "Loading..." : "Login"}
            </CustomButton>
            <CustomBox sx={{ color: "#5352ed", fontWeight: "bold" }}>
              Forgot Passoword?
            </CustomBox>
            <CustomBox>
              <span style={{ color: "#91919F" }}>
                Don't have an account yet?{" "}
              </span>
              <Link to="/signup" style={{ color: "#5352ed" }}>
                Sign Up
              </Link>
            </CustomBox>
          </RightBox>
        </Main>
      )}
    </>
  );
}

export default Login;
