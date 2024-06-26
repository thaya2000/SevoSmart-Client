import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import RambousLoader from "../../routes/RambousLoader";

const OrderDetails = () => {
  const { orderNumber } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/order/${orderNumber}`
        );
        setLoading(false);
        setOrder(response.data);
        setError(null); // Clear any previous errors
      } catch (error) {
        console.error("Error fetching order details:", error);
        setError(error.message); // Set the error message
      }
    };

    fetchOrderDetails();
  }, [orderNumber]);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!order) {
    return <RambousLoader />;
  }

  return (
    <div className="p-8 bg-gray-800 text-white min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Order Details</h1>
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="mb-6">
          <strong className="text-lg text-gray-400">Order Number:</strong>
          <span className="text-lg text-gray-200 ml-2">{order.orderNumber}</span>
        </div>
        <div className="mb-6">
          <strong className="text-lg text-gray-400">Customer Name:</strong>
          <span className="text-lg text-gray-200 ml-2">{order.orderCustomerName}</span>
        </div>
        <div className="mb-6">
          <strong className="text-lg text-gray-400">Order Date:</strong>
          <span className="text-lg text-gray-200 ml-2">{order.orderDate}</span>
        </div>
        <div className="mb-6">
          <strong className="text-lg text-gray-400">Status:</strong>
          <span className="text-lg text-gray-200 ml-2">{order.orderStatus}</span>
        </div>
        <div className="mb-6">
          <strong className="text-lg text-gray-400">Order Amount:</strong>
          <span className="text-lg text-gray-200 ml-2">{order.orderAmount}</span>
        </div>
        <div className="mb-6">
          <strong className="text-lg text-gray-400">Billing Address:</strong>
          <span className="text-lg text-gray-200 ml-2">{order.orderBillingAddress}</span>
        </div>
        <div className="mb-6">
          <strong className="text-lg text-gray-400">Products:</strong>
          <ul className="list-disc list-inside ml-4">
            {order.products.map((product, index) => (
              <li key={index} className="mb-4">
                <div className="text-gray-300">
                  <strong>Name:</strong> {product.productName}
                </div>
                <div className="text-gray-300">
                  <strong>Quantity:</strong> {product.productQuantity}
                </div>
                {product.productImageUrl && (
                  <div className="mt-2">
                    <img
                      src={product.productImageUrl}
                      alt={product.productName}
                      className="w-32 h-32 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/admin-panel"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
          >
            Back to Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
