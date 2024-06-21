// AdminRoutes.jsx
import { Routes, Route } from "react-router-dom";
import AdminPanel from "../pages/Admin/AdminPanel.jsx";
import OrderDetails from "../pages/Admin/OrderDetails.jsx";
import Products from "../pages/Admin/Products.jsx";
import EditProduct from "../pages/Admin/EditProduct.jsx";
import AdminAuthCheck from "./AdminAuthCheck.jsx";

export default function AdminRoutes() {
  return (
    <AdminAuthCheck>
      <Routes>
        <Route path="admin-panel" element={<AdminPanel />} />
        <Route path="order-details/:orderNumber" element={<OrderDetails />} />
        <Route path="products" element={<Products />} />
        <Route path="edit-product/:id" element={<EditProduct />} />
      </Routes>
    </AdminAuthCheck>
  );
}
