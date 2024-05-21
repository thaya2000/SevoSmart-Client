import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      setLoading(false);
      setOrders(response.data); // Assuming your API response is an array of order objects
      generateSerialNumbers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  const generateSerialNumbers = (orders) => {
    const serials = {};
    orders.forEach((order, index) => {
      serials[order.orderNumber] = index + 1;
    });
    setSerialNumbers(serials);
  };

  return (
    <div className="flex h-screen">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="bg-gray-800 w-64 p-4 text-white">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admin/products">Accessories</Link>
          </li>
          <li>
            <Link to="/past-projects">Past Projects</Link>
          </li>
          <li>
            <Link to="/news-admin">News</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Order Details</h2>
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
                  <td className="border px-4 py-2">{order.customerPhoneNo}</td>
                  <td className="border px-4 py-2">{order.orderStatus}</td>
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
  );
};

export default AdminPanel;
