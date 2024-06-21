import "./Login.css";
import { useState } from "react";
import { userAuth } from "../../../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const DEFAULT_EMAIL = import.meta.env.VITE_APP_DEFAULT_EMAIL;
  const DEFAULT_PASSWORD = import.meta.env.VITE_APP_DEFAULT_PASSWORD;

  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // hook
  const [auth, setAuth] = userAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/v1/auth/authenticate`, {
        email,
        password,
      });
      console.log(data);
      setLoading(false);
      if (data?.message) {
        toast.error(data.message);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        console.log(location.state);
        navigate(
          location.state?.from?.pathname ||
            `/${data?.user?.role === "ADMIN" ? "admin/admin-panel" : ""}`
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
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="login-container">
        <div className="create-account">Login</div>
        <form onSubmit={handleSubmit} className="from-login">
          <div className="signup-inputs">
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
                type={showPassword ? "text" : "password"}
                className="login-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FaEyeSlash
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FaEye
                  className="eye-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </div>
          <div className="dont-have-account">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="link-style">
              Sign up
            </Link>
          </div>
          <div className="submit-button-login" onClick={handleSubmit}>
            Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
