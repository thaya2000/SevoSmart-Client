import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import RambousLoader from "../../routes/RambousLoader";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const [serialNumbers, setSerialNumbers] = useState({});

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/v1/user/allOrders");
      setOrders(response.data); // Assuming your API response is an array of order objects
      generateSerialNumbers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateSerialNumbers = (orders) => {
    const serials = {};
    orders.forEach((order, index) => {
      serials[order.orderNumber] = index + 1;
    });
    setSerialNumbers(serials);
  };

  const handleStatusChange = async (orderNumber, newStatus) => {
    try {
      setLoading(true);
      const response = await axios.put(
        `/api/v1/user/deliverOrder/${orderNumber}`
      );

      if (response.status === 200) {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.orderNumber === orderNumber
              ? { ...order, orderStatus: newStatus }
              : order
          )
        );
        toast.success("Order Delivered.");
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="admin-panelflex h-screen">
          <div className="admin-sidebar bg-gray-800 w-100% p-4 text-white">
            <Link to="/admin-panel">
              <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
            </Link>
            <ul className="space-y-4">
              <li>
                <Link to="/users" className="hover:text-blue-800">
                  Users
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-blue-800">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/past-projects" className="hover:text-blue-800">
                  Past Projects
                </Link>
              </li>
              <li>
                <Link to="/news-admin" className="hover:text-blue-800">
                  News
                </Link>
              </li>
              <li>
                <Link to="/logout" className="hover:text-blue-800">
                  Logout
                </Link>
              </li>
            </ul>
          </div>

          <div className="admin-table flex-1 p-4 overflow-y-auto">
            <h1 className="admin-tableh text-2xl font-bold mb-4">
              Order Details
            </h1>
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-gray-200 text-gray-800">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Customer Name</th>
                    <th className="px-4 py-2">Order date</th>
                    <th className="px-4 py-2">Phone No</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Order Amount</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.orderNumber}>
                      <td className="border px-4 py-2">
                        {serialNumbers[order.orderNumber]}
                      </td>
                      <td className="border px-4 py-2">{order.customerName}</td>
                      <td className="border px-4 py-2">{order.orderDate}</td>
                      <td className="border px-4 py-2">
                        {order.customerPhoneNo}
                      </td>
                      <td className="border px-4 py-2">
                        <select
                          value={order.orderStatus}
                          onChange={(e) =>
                            handleStatusChange(
                              order.orderNumber,
                              e.target.value
                            )
                          }
                          className="bg-white border border-gray-300 text-gray-800 py-1 px-2 rounded"
                        >
                          <option value="PLACED">PLACED</option>
                          <option value="DELIVERED">DELIVERED</option>
                        </select>
                      </td>
                      <td className="border px-4 py-2">{order.orderAmount}</td>
                      <td className="border px-4 py-2">
                        {order.orderBillingAddress}
                      </td>
                      <td className="border px-4 py-2">
                        <div className="flex flex-row justify-center">
                          <Link
                            to={`/admin/order-details/${order.orderNumber}`}
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 mr-2 rounded"
                          >
                            View
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
