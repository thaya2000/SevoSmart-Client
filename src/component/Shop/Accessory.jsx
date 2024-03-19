import React from "react";
import { Link } from "react-router-dom";

const Accessory = ({ accessory_image, accessory_name, accessory_price }) => {
  return (
    <div className="flex flex-col items-center border-2 border-black rounded-2xl w-80">
      <img
        className="flex justify-self-center mt-2 py-3 h-60 w-60"
        src={`data:image/jpeg;base64, ${accessory_image}`}
        alt={accessory_name}
      />
      <div className="flex justify-items-center text-4xl font-bold py-3">
        {accessory_name}
      </div>
      <div className="flex justify-items-center text-4xl font-bold py-3">
        {accessory_price}
      </div>

      <div className="flex justify-center items-center py-3">
        <Link
          to="/cart"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center w-60 h-8 mb-5"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          Add to Cart
        </Link>
      </div>


    </div>
  );
};

export default Accessory;
