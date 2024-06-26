import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import RambousLoader from "../../routes/RambousLoader";
import "./Addressform.css";

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
           <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4 mb-4">
        <div className="ml-100 text-3xl text-blue-900 font-semibold">
        Order placement informations
        </div>
      </div>
          <h1 className="text-l text-black font-bold mb-4">Enter Delivery Address Details</h1>
          <div className="form-container bg-white  rounded-md shadow-md w-full max-w-lg">
          <form onSubmit={handleSubmit}>
            <div className="form-content-container">
  <div className="mb-4 ml-20 ">
    <label htmlFor="addressLineOne" className="block text-l font-medium text-gray-700">
      Address Line 1
    </label>
    <input
      type="text"
      id="addressLineOne"
      name="addressLineOne"
      value={formData.addressLineOne}
      onChange={handleChange}
      className="mt-1 p-1.5 max-w-xs w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
      required
    />
  </div>
  <div className="mb-4 ml-20">
    <label htmlFor="addressLineTwo" className="block text-l font-medium text-gray-700">
      Address Line 2
    </label>
    <input
      type="text"
      id="addressLineTwo"
      name="addressLineTwo"
      value={formData.addressLineTwo}
      onChange={handleChange}
      className="form-container-input mt-1 p-1.5 max-w-xs w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-l"
    />
  </div>
  <div className="mb-4 ml-20">
    <label htmlFor="city" className="block text-l font-medium text-gray-700">
      City
    </label>
    <input
      type="text"
      id="city"
      name="city"
      value={formData.city}
      onChange={handleChange}
      className="mt-1 p-1.5 max-w-xs w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
      required
    />
  </div>
  <div className="mb-4 ml-20">
    <label htmlFor="district" className="block text-l font-medium text-gray-700">
      District
    </label>
    <input
      type="text"
      id="district"
      name="district"
      value={formData.district}
      onChange={handleChange}
      className="mt-1 p-1.5 max-w-xs w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
      required
    />
  </div>
  <div className="mb-4 ml-20">
    <label htmlFor="phoneNo" className="block text-l font-medium text-gray-700">
      Phone Number
    </label>
    <input
      type="tel"
      id="phoneNo"
      name="phoneNo"
      value={formData.phoneNo}
      onChange={handleChange}
      className="mt-1 p-1.5 max-w-xs w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
      required
    />
  </div>
  <div className=" mb-5 mt-10 flex justify-center  ">
    <button
      type="submit"
      className="bg-blue-800 mb-10 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-l focus:outline-none"
    >
      Place Order
    </button>
  </div>
  </div>
</form>
</div>

        </div>

      )}
    </div>
  );
};

export default AddressForm;
