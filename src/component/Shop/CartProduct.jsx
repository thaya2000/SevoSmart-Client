import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartProduct = ({
  cart_image_url,
  product_name,
  product_price,
  product_quantity,
  onUpdateQuantity,
}) => {
  const [quantity, setQuantity] = useState(product_quantity);
  const [totalPrice, setTotalPrice] = useState(product_price * product_quantity);

  useEffect(() => {
    setTotalPrice(product_price * quantity);
  }, [quantity, product_price]);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(newQuantity);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(newQuantity);
    }
  };

  if (!cart_image_url) {
    return <div>No image available</div>;
  }

  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md p-5 mb-5 items-center">
      <img className="h-40 w-40 object-cover rounded-lg" src={cart_image_url} alt={product_name} />
      <div className="flex flex-col sm:ml-10 mt-5 sm:mt-0 justify-between w-full">
        <div className="flex flex-row justify-between items-center text-2xl font-semibold">
          <div>{product_name}</div>
          <div>Rs. {totalPrice.toFixed(2)}</div>
        </div>
        <div className="flex flex-row justify-between items-center mt-5 w-full">
          <div className="text-xl font-medium">Quantity:</div>
          <div className="flex items-center">
            <button
              className="px-3 py-1 text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="mx-4 text-xl font-medium">{quantity}</span>
            <button
              className="px-3 py-1 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <button className="ml-10 py-1 px-3 rounded-lg text-lg font-medium text-white bg-blue-700 hover:bg-blue-800 transition-colors">
            <Link to="/product_remove">Remove</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
