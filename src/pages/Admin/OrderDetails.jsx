import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const OrderDetails = () => {
  const { orderNumber } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/order/${orderNumber}`
        );
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
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-indigo-950 text-white">
      <h1 className="text-4xl font-medium mb-8 flex justify-center">
        Order Details
      </h1>
      <div className="mb-6">
        <strong className="text-xl text-gray-300">Order Number:</strong>
        <span className="text-xl text-gray-100 ml-2">{order.orderNumber}</span>
      </div>
      <div className="mb-6">
        <strong className="text-xl text-gray-300">Customer Name:</strong>
        <span className="text-xl text-gray-100 ml-2">
          {order.orderCustomerName}
        </span>
      </div>
      <div className="mb-6">
        <strong className="text-xl text-gray-300">Order Date:</strong>
        <span className="text-xl text-gray-100 ml-2">{order.orderDate}</span>
      </div>
      <div className="mb-6">
        <strong className="text-xl text-gray-300">Status:</strong>
        <span className="text-xl text-gray-100 ml-2">{order.orderStatus}</span>
      </div>
      <div className="mb-6">
        <strong className="text-xl text-gray-300">Order Amount:</strong>
        <span className="text-xl text-gray-100 ml-2">{order.orderAmount}</span>
      </div>
      <div className="mb-6">
        <strong className="text-xl text-gray-300">Billing Address:</strong>
        <span className="text-xl text-gray-100 ml-2">
          {order.orderBillingAddress}
        </span>
      </div>
      <div className="mb-6">
        <strong className="text-xl text-gray-300">Products:</strong>
        <ul className="list-disc list-inside">
          {order.products.map((product, index) => (
            <li key={index} className="mb-2">
              <div>
                <strong className="text-gray-300">Name:</strong>{" "}
                {product.productName}
              </div>
              <div>
                <strong className="text-gray-300">Quantity:</strong>{" "}
                {product.productQuantity}
              </div>
              {product.productImage && (
                <div>
                  <strong className="text-gray-300">Image:</strong>
                  <img
                    src={`data:image/jpeg;base64,${product.productImage}`}
                    alt={product.productName}
                    className="w-40 mt-2"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Link
          to="/admin-panel"
          className="bg-cyan-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Back to Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
