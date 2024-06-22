import React from "react";
import { Link } from "react-router-dom";

const CartProduct = ({
  cart_image_url,
  product_name,
  product_price,
  product_quantity,
}) => {
  // Check if accessory_image is defined
  if (!cart_image_url) {
    return <div>No image available</div>;
  }

  // const imgData = `data:image/jpg;base64,${cart_image}`;
  return (
    <div className="flex sm:flex-row flex-col bg-slate-200 rounded-lg shadow-md  p-5 mb-5 items-center">
      <img className="flex h-40 w-40" src={cart_image_url} alt={product_name} />
      <div className="flex flex-col ml-10 justify-items-start">
        <div className="flex flex-row justify-between text-3xl font-normal pt-5">
          <div className="flex flex-row">{product_name}</div>
          <div>Rs.{product_price}</div>
        </div>
        <div className="flex flex-row justify-between pt-5">
          <div className="flex text-3xl font-normal">Quantity : </div>
          <div className="flex text-3xl font-normal">{product_quantity}</div>
          <div className="ml-10 py-1 px-1 rounded text-3xl font-normal text-center text-black bg-blue-700 focus:ring-4 border-b-1 border-black focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Link to="/product_remove">Remove</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
