import "./Login.css";
import { useState } from "react";
import { userAuth } from "../../../context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

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
        <div>Create Account</div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            className="login-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="login-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-red-300 font-light text-2xl border-slate-900 rounded-2xl"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
