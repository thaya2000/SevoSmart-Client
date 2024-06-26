import React from "react";
import "./Cart.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartProduct from "../../component/Shop/CartProduct";
import { userAuth } from "../../context/authContext";
import axios from "axios";
import { useSelector } from "react-redux";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [auth, setAuth] = userAuth();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.userId) {
      loadCartProducts();
    }
  }, [user]);

  const loadCartProducts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `/api/v1/user/cart_products/${user.userId}`
      );
      setCartProducts(result.data);
      setLoading(false);
      console.log(result.data);
      console.log("user id is:", user.userId);
    } catch (error) {
      console.error("Error loading Accessories:", error);
    }
  };

  return (
    <div className="flex flex-col m-5 ">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4 mb-4">
        <div className="ml-100 text-3xl text-blue-900 font-semibold">
          Shopping cart
        </div>
      </div>

      <div className=" Ordersummery-container ">
        <div className="Ordersummery-container">
          {cartProducts.map((cartProduct, index) => (
            // console.log(cartProduct.quantity)
            <CartProduct
              key={index}
              cart_image_url={cartProduct.product.productImageURL }
              product_name={cartProduct.product.productName}
              product_price={cartProduct.product.price}
              product_quantity={cartProduct.quantity}
            />
          ))}
        </div>
        <div
          className="flex flex-col justify-start px-8 m-auto h-80 w-90"
          style={{
            background:
              "linear-gradient(180deg, rgba(239, 236, 236, 0) 50.38%, #FFFAFA 92.58%)",
            border: "1px solid",
            borderImageSource:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(167, 162, 162, 0.39) 101.77%)",
            boxShadow: "4px 4px 100px 0px #69696933",
          }}
        >
          <div className="ordersummery text-blue-900 font-bold">Order Summary</div>
          <div className="flex flex-row justify-between text-3xl font-normal pt-7">
            <div className="shipping ">Shipping</div>
            <div className="shipping">free</div>
          </div>
          <div className="flex flex-row justify-between text-3xl font-medium pt-5">
            <div className="total text-l font-bold text-red-800">Sub Total(lkr)</div>
            <div className="total text-red-800 font-bold ">7500</div>
          </div>
          <div className="flex flex-row justify-center text-3xl font-medium py-5">
            <Link to="/check_out">
              <button
                type="button"
                className=" blue-button text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-8 w-60"
              >
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
