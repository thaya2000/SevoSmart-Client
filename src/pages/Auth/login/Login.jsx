import "./Login.css";
import { useState } from "react";
import { userAuth } from "../../../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUser, FaLock } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("user1234");

  // hook
  const [auth, setAuth] = userAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/authenticate`, {
        email,
        password,
      });
      console.log(data);
      if (data?.message) {
        toast.error(data.message);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        navigate(
          location.state || `/`
          // `/dashboard/${data?.user?.role === 1 ? "admin" : "user"}`
        );
        toast.success("Login successful");
      }
    } catch (err) {
      console.log(err);
      toast.error("Login failed. Try again.");
    }
  };
  return (
    <div className="flex relative items-center justify-center w-100v h-100v">
      <div className="login-container">
        <div className="create-account">Login</div>
        <form onSubmit={handleSubmit} className="from-login">
          <div className="user-input-container">
            <input
              type="text"
              className="login-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="user-icon" />
          </div>
          <div className="password-input-container">
            <input
              type="text"
              className="login-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="lock-icon" />
          </div>
          <div
            className="submit-button-login "
            // type="submit"
            onClick={handleSubmit}
          >
            Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
