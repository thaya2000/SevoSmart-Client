import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

const CartProduct = ({
  cart_image_url,
  product_name,
  product_price,
  product_quantity,
  product_id,
  onUpdateQuantity,
  onToggleSelect,
  isSelected,
  onRemoveProduct,
}) => {
  const [quantity, setQuantity] = useState(product_quantity);
  const [totalPrice, setTotalPrice] = useState(
    product_price * product_quantity
  );
  const { user } = useSelector((state) => state.auth);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    setTotalPrice(product_price * quantity);
  }, [quantity, product_price]);

  const handleIncrease = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(newQuantity);

    try {
      await axios.post(
        `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/addProductToCart/${product_id}/${user.userId}`,
        {
          quantity: newQuantity,
        }
      );
      toast.success("Product quantity increased");
    } catch (error) {
      console.error("Error increasing product quantity:", error);
      toast.error("Error increasing product quantity");
    }
  };

  const handleDecrease = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(newQuantity);

      try {
        await axios.delete(
          `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/removeProductFromCartById/${product_id}/${user.userId}`,
          {
            quantity: newQuantity,
          }
        );
        toast.success("Product quantity decreased");
      } catch (error) {
        console.error("Error decreasing product quantity:", error);
        toast.error("Error decreasing product quantity");
      }
    }
  };

  const handleToggleSelect = () => {
    onToggleSelect();
  };

  const handleDeleteProduct = async () => {
    try {
      await axios.delete(
        `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/deleteProductFromCartById/${product_id}/${user.userId}`
      );
      toast.success("Product successfully removed from cart.");
      onRemoveProduct(product_id);
      setShowDeleteConfirmation(false);
    } catch (error) {
      toast.error("Error removing product from cart:", error);
      console.error("Error removing product from cart:", error);
    }
  };

  if (!cart_image_url) {
    return <div>No image available</div>;
  }

  return (
    <div className="flex sm:flex-row flex-col bg-slate-100 rounded-lg shadow-md p-5 mb-5 items-center">
      <input
        type="checkbox"
        className="mx-3 h-7 w-7"
        checked={isSelected}
        onChange={handleToggleSelect}
        style={{ transform: "scale(2)" }}
      />

      <img
        className="flex mx-1 h-40 w-40"
        src={cart_image_url}
        alt={product_name}
      />
      <div className="flex flex-col ml-10 justify-items-start w-full">
        <div className="flex flex-row justify-between text-3xl font-normal pt-5 w-full">
          <div className="flex flex-row">{product_name}</div>
          <div>Rs.{totalPrice}</div>
        </div>
        <div className="flex flex-row justify-between pt-5 w-full">
          <div className="flex text-3xl font-normal">Quantity:</div>
          <div className="flex items-center">
            <button
              className="px-3 py-1 text-white bg-red-500 rounded-lg"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="mx-4 text-3xl font-normal">{quantity}</span>
            <button
              className="px-3 py-1 text-white bg-green-500 rounded-lg"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <div
            className="ml-10 py-1 px-3 rounded text-3xl font-normal text-center text-white bg-blue-700 focus:ring-4 border-b-1 border-black focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            onClick={() => setShowDeleteConfirmation(true)}
          >
            Remove
          </div>
        </div>
      </div>

      {showDeleteConfirmation && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg
                      className="h-6 w-6 text-red-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-title"
                    >
                      Remove Product
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to remove this product from your
                        cart?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleDeleteProduct}
                >
                  Remove
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowDeleteConfirmation(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProduct;
