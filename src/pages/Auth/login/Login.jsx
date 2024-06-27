import "./Login.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slices/authSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const DEFAULT_EMAIL = import.meta.env.VITE_APP_DEFAULT_EMAIL;
  const DEFAULT_PASSWORD = import.meta.env.VITE_APP_DEFAULT_PASSWORD;
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, role } = useSelector((state) => state.auth);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      toast.success("Login successful");
    } else {
      toast.error(resultAction.payload || resultAction.error.message);
    }
  };

  useEffect(() => {
    if (role) {
      navigate(
        location.state?.from || (role === "ADMIN" ? "/admin/admin-panel" : "/")
      );
    }
  }, [role, navigate, location]);

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
                id="login-user-name"
              />
              <FaUser className="user-icon" />
            </div>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                className="login-input"
                placeholder="Enter your password"
                value={password}
                id="login-password"
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
          <div id="LoginID" className="submit-button-login" onClick={handleSubmit}>
            Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
