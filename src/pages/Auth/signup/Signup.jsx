// src/pages/Signup.jsx
import "./Signup.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/slices/authSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading } = useSelector((state) => state.auth);

  const DEFAULT_EMAIL = import.meta.env.VITE_APP_DEFAULT_EMAIL;
  const DEFAULT_PASSWORD = import.meta.env.VITE_APP_DEFAULT_PASSWORD;
  const DEFAULT_FIRSTNAME = import.meta.env.VITE_APP_DEFAULT_FIRSTNAME;
  const DEFAULT_LASTNAME = import.meta.env.VITE_APP_DEFAULT_LASTNAME;
  const DEFAULT_ROLE = import.meta.env.VITE_APP_DEFAULT_ROLE;

  const [firstname, setFirstName] = useState(DEFAULT_FIRSTNAME);
  const [lastname, setLastName] = useState(DEFAULT_LASTNAME);
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [role, setRole] = useState(DEFAULT_ROLE) || "CUSTOMER";
  const [password, setPassword] = useState(DEFAULT_PASSWORD);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(
      register({ firstname, lastname, email, role, password })
    );
    if (register.fulfilled.match(resultAction)) {
      toast.success("Registration successful");
      // navigate(location.state?.from || "/");
      navigate("/");
    } else {
      toast.error(resultAction.payload || resultAction.error.message);
    }
  };

  return (
    <div className="signup-container">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="create-account-text">SignUp</div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="input-container">
          <input
            type="text"
            className="register-input"
            placeholder="Enter your first name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            autoFocus
          />
          <input
            type="text"
            className="register-input"
            placeholder="Enter your last name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            className="register-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="register-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-line">
          <span>Already have an account ?</span>
          <Link to="/login" className="link-style">
            Login
          </Link>
        </div>
        <div className="submit-button-register" onClick={handleSubmit}>
          SignUp
        </div>
      </form>
    </div>
  );
}
