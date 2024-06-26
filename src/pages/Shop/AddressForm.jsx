import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import RambousLoader from "../../routes/RambousLoader";

const AddressForm = () => {
  const [formData, setFormData] = useState({
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    district: "",
    phoneNo: ""
  });
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(
        `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/placeOrder/${user.userId}`,
        formData
      );
      setLoading(false);
      toast.success("Order placed successfully!");
      navigate("/cart");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="m-5">
          <h1 className="text-2xl font-bold mb-4">Enter Delivery Address Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 my-10">
              <label htmlFor="addressLineOne" className="block text-lg font-medium text-gray-700">
                Address Line 1
              </label>
              <input
                type="text"
                id="addressLineOne"
                name="addressLineOne"
                value={formData.addressLineOne}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="addressLineTwo" className="block text-lg font-medium text-gray-700">
                Address Line 2
              </label>
              <input
                type="text"
                id="addressLineTwo"
                name="addressLineTwo"
                value={formData.addressLineTwo}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-lg font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="district" className="block text-lg font-medium text-gray-700">
                District
              </label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNo" className="block text-lg font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className="mt-1 p-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                required
              />
            </div>
            <div className="mt-6 flex justify-center w-full">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-lg focus:outline-none"
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
