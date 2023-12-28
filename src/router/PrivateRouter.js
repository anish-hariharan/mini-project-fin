import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const isLoggedIn = localStorage.getItem("userInfo") ? true : false;

  return isLoggedIn ? <Navigate to="/home" replace /> : children;
};

export default PrivateRouter;
