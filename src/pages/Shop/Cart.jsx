import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/construction.jpg";
import image2 from "../../assets/solar.jpg";
import image3 from "../../assets/footer_sample.jpg";
import CartProduct from "../../component/Shop/CartProduct";
import { userAuth } from  "../../context/authContext"
import axios from "axios";

const Cart = () => {


  const [cartProducts, setCartProducts] = useState([]);
  const [auth, setAuth] = userAuth();

  useEffect(() => {
    // Check if auth.user is defined before calling loadCartProducts
    if (auth.user) {
      loadCartProducts();
    }
  }, [auth]);




  const loadCartProducts = async () => {
      try {
          const result = await axios.get(`/api/v1/user/cart_products/${auth.user.id}`);
          setCartProducts(result.data);
          console.log(result.data);
          console.log(auth.user.id)
      } catch (error) {
          console.error('Error loading Accessories:', error);
      }
  };

  

  
  return (
    <div className="flex flex-col m-5 ">
      <div className="flex justify-start pl-5 pt-5 sm:text-6xl font-medium text-4xl">
        Cart
      </div>
      <div className="flex flex-wrap pt-20">
        <div className="flex flex-col justify-start pl-5 w-200">
        {cartProducts.map((cartProduct, index) => (
          // console.log(cartProduct.quantity)
          <CartProduct
          key={index}
          cart_image={cartProduct.product.productImage}
          product_name={cartProduct.product.productName}
          product_price={cartProduct.product.price}
          product_quantity={cartProduct.quantity}
        />
        ))}
        </div>
        <div
          className="flex flex-col justify-start px-8 m-auto h-80 w-85"
          style={{
            background:
              "linear-gradient(180deg, rgba(239, 236, 236, 0) 50.38%, #FFFAFA 92.58%)",
            border: "1px solid",
            borderImageSource:
              "linear-gradient(180deg, #FFFFFF 0%, rgba(167, 162, 162, 0.39) 101.77%)",
            boxShadow: "4px 4px 100px 0px #69696933",
          }}
        >
          <div className="flex text-4xl font-medium mt-5">Order Summary</div>
          <div className="flex flex-row justify-between text-3xl font-normal pt-7">
            <div className="flex ">Shipping</div>
            <div>free</div>
          </div>
          <div className="flex flex-row justify-between text-3xl font-medium pt-5">
            <div className="flex ">Sub Total(lkr)</div>
            <div>7500</div>
          </div>
          <div className="flex flex-row justify-center text-3xl font-medium py-5">
            <Link to="/check_out">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-8 w-60"
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
