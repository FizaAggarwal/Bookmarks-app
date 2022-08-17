import { Navigate } from "react-router-dom";

function Protected(props) {
  return (
    <>
      {props.isLogin ? (
        <props.Dashboard />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

export default Protected;
