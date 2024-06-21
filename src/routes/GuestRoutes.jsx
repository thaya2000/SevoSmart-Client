//GuestRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Auth/signup/Signup";
import Login from "../pages/Auth/login/Login";

export default function GuestRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
