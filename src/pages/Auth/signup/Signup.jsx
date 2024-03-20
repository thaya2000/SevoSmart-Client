import { useState } from "react";
import "./Signup.css";
import { userAuth } from "../../../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const [firstname, setFirstName] = useState("user_f");
  const [lastname, setLastName] = useState("user_l");
  const [email, setEmail] = useState("user@gmail.com");
  const [role, setRole] = useState("USER");
  const [password, setPassword] = useState("user1234");

  // hook
  const [auth, setAuth] = userAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/auth/register`,
        {
          firstname,
          lastname,
          email,
          role,
          password,
        }
      );
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
    <div className="flex relative items-center justify-center w-100v h-100v">
      <div className="signup-container">
        <div className="create-account-text">SignUp</div>
        <form onSubmit={handleSubmit} className="flex flex-col">
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
          <div
            className="submit-button-register "
            onClick={handleSubmit}
          >
            SignUp
          </div>
        </form>
      </div>
    </div>
  );
}
