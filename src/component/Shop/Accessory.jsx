import React from "react";
import { Link } from "react-router-dom";

const Accessory = ({accessory_image, accessory_name, accessory_price }) => {

  // Check if accessory_image is defined
  if (!accessory_image) {
    return <div>No image available</div>;
  }

  // Construct the data URI scheme dynamically based on the image format
  const imgData = `data:image/jpg;base64,${accessory_image}`;

  return (
    <Link>
      <div className="flex flex-col items-center border-2 border-black rounded-2xl w-80">
        <img
          className="flex justify-self-center mt-2 py-3 h-60 w-60"
          src={imgData}
          alt={accessory_name}
        />
        <div className="flex justify-items-center text-4xl font-bold py-3">
          {accessory_name}
        </div>
        <div className="flex justify-items-center text-3xl font-bold text-red-600 py-3">
          {accessory_price} LKR
        </div>
        <div className="flex flex-row justify-center gap-4 items-center py-3">
          <Link
            to="/cart"
            className="text-white bg-blue-900 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center w-32 h-10 mb-5"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            Add to Cart
          </Link>
          <Link
            to="/order-now"
            className="text-white bg-yellow-900 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center w-32 h-10 mb-5"
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            Buy Now
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default Accessory;
