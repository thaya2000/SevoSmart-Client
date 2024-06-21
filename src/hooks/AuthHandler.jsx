import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchUserData, logout } from "../redux/slices/authSlice";
import { getCookie } from "../services/cookieUtils.js";

const AuthHandler = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getCookie("USER_KEY");

  useEffect(() => {
    if (token) {
      console.log("Fetching user data...");
      dispatch(fetchUserData());
    } else {
      console.log("No token found");
      dispatch(logout());
      // navigate("/login");
    }
  }, []);

  return null;
};

export default AuthHandler;
