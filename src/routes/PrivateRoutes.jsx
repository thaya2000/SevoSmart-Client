// PrivateRoutes.jsx
import { Routes, Route } from "react-router-dom";
import UserAuthCheck from "./UserAuthCheck.jsx";
import Accessories from "../pages/Shop/Accessories.jsx";
import Cart from "../pages/Shop/Cart.jsx";

export default function PrivateRoutes() {
  return (
    <UserAuthCheck>
      <Routes>
        <Route path="accessories" element={<Accessories />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </UserAuthCheck>
  );
}
