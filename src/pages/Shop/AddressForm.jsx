import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import RambousLoader from "../../routes/RambousLoader";
import "./Addressform.css";

const AddressForm = () => {
  const { state } = useLocation();
  const { selectedCartIds } = state || {};
  const [formData, setFormData] = useState({
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    district: "",
    phoneNo: "",
  });
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const cartIdsParam = selectedCartIds
        .map((id) => `cartIds=${id}`)
        .join("&");
      await axios.post(
        `/api/v1/user/order/placeOrder/${user.userId}?${cartIdsParam}`,
        formData
      );
      setLoading(false);
      toast.success("Order placed successfully!");
      navigate("/cart");
    } catch (error) {
      console.error("Error placing order:", error);
      setLoading(false);
      toast.error("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Delivery Address
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="addressLineOne"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Address Line 1
              </label>
              <input
                type="text"
                id="addressLineOne"
                name="addressLineOne"
                value={formData.addressLineOne}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="addressLineTwo"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Address Line 2
              </label>
              <input
                type="text"
                id="addressLineTwo"
                name="addressLineTwo"
                value={formData.addressLineTwo}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="district"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phoneNo"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg focus:outline-none"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
