import { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { userAuth } from "../../../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const DEFAULT_EMAIL = import.meta.env.VITE_APP_DEFAULT_EMAIL;
  const DEFAULT_PASSWORD = import.meta.env.VITE_APP_DEFAULT_PASSWORD;
  const DEFAULT_FIRSTNAME = import.meta.env.VITE_APP_DEFAULT_FIRSTNAME;
  const DEFAULT_LASTNAME = import.meta.env.VITE_APP_DEFAULT_LASTNAME;
  const DEFAULT_ROLE = import.meta.env.VITE_APP_DEFAULT_ROLE;

  const [firstname, setFirstName] = useState(DEFAULT_FIRSTNAME);
  const [lastname, setLastName] = useState(DEFAULT_LASTNAME);
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [role, setRole] = useState(DEFAULT_ROLE);
  const [password, setPassword] = useState(DEFAULT_PASSWORD);

  // hook
  const [auth, setAuth] = userAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/v1/auth/register`, {
        firstname,
        lastname,
        email,
        role,
        password,
      });
      console.log(data);
      if (data?.message) {
        console.log(data.message);
        toast.error(data.message);
      } else {
        localStorage.setItem("auth", JSON.stringify(data));
        setAuth({ ...auth, token: data.token, user: data.user });
        navigate(location.state || "/");
        toast.success("Registration successful");
      }
    } catch (err) {
      console.log(err);
      toast.error("Registration failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
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
            placeholder="Enter your role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
        <div className="submit-button-register " onClick={handleSubmit}>
          SignUp
        </div>
      </form>
    </div>
  );
}
