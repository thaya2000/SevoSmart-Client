import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { userAuth } from "../../context/authContext";


const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const data = location.state;
  const [auth, setAuth] = userAuth();

  if (!data) {
    return <div>No product data available</div>;
  }

  const imgData = `data:image/jpg;base64,${data}`;

  const addToCart = async () => {
    // try {
    //   await axios.post(`/api/v1/user/addProductToCart/${id}/${auth.user.id}`);
    //   toast.success("Product added to cart successfully");
    // } catch (error) {
    //   console.error("Error adding product to cart:", error);
    //   toast.error("Error adding product to cart. Please try again later.");
    // }
  };

  // const { accessory_image, accessory_name, accessory_price } = product;

  return (
<div className="container mx-auto px-4 py-8">
  <div className="max-w-screen-lg mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
        <img src={imgData} alt={data.accessory_name} className="w-full max-h-80 object-contain" />
      </div>
      <div>
        <h2 className="text-3xl font-semibold text-center md:text-left mb-4">{data.accessory_name}</h2>
        <p className="text-lg text-gray-700">{data.accessory_description}</p>
        <div className="flex flex-col mt-5 gap-y-5">
          <div className="text-2xl font-semibold text-red-600 mb-2 md:mb-0">{data.accessory_price} LKR</div>
          <div className="flex justify-center">
            <button onClick={addToCart} className="text-white bg-blue-900 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center px-6 w-32 h-10">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default ProductDetails;
