import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartProduct from "../../component/Shop/CartProduct";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Cart.css"; // Make sure to import the CSS file
import RambousLoader from "../../routes/RambousLoader";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userId) {
      loadCartProducts();
    }
  }, [user]);

  const loadCartProducts = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/user/cart_products/${user.userId}`
      );
      setCartProducts(result.data);
      setSelectedProducts(result.data.map(() => false)); // Initialize all products as not selected
      setLoading(false);
    } catch (error) {
      console.error("Error loading cart products:", error);
      setLoading(false);
    }
  };

  const calculateSubtotal = () => {
    return cartProducts.reduce((subtotal, cartProduct, index) => {
      return selectedProducts[index]
        ? subtotal + cartProduct.product.price * cartProduct.quantity
        : subtotal;
    }, 0);
  };

  const handleCheckout = () => {
    const selectedCartIds = cartProducts
      .filter((_, index) => selectedProducts[index])
      .map((cartProduct) => cartProduct.id);
    navigate("/address", { state: { selectedCartIds } });
  };
  
  const handleUpdateQuantity = async (index, newQuantity) => {
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[index].quantity = newQuantity;
    setCartProducts(updatedCartProducts);
  };

  const handleToggleSelect = (index) => {
    const updatedSelectedProducts = [...selectedProducts];
    updatedSelectedProducts[index] = !updatedSelectedProducts[index];
    setSelectedProducts(updatedSelectedProducts);
  };

  const handleRemoveProduct = (product_id) => {
    setCartProducts(
      cartProducts.filter((product) => product.product.id !== product_id)
    );
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="flex flex-col m-5">
          <div className="bg-gray-100 p-4 rounded-md shadow-md mt-4 mb-4">
            <div className="ml-100 text-3xl text-blue-900 font-semibold">
              Shopping cart
            </div>
          </div>
          <div className="orderSummaryContainer flex flex-col md:flex-row">
            <div className="cartProducts flex-1">
              {cartProducts.length > 0 ? (
                cartProducts.map((cartProduct, index) => (
                  <CartProduct
                    key={index}
                    cart_image_url={cartProduct.product.productImageURL}
                    product_name={cartProduct.product.productName}
                    product_price={cartProduct.product.price}
                    product_quantity={cartProduct.quantity}
                    product_id={cartProduct.product.id}
                    onUpdateQuantity={(newQuantity) =>
                      handleUpdateQuantity(index, newQuantity)
                    }
                    onToggleSelect={() => handleToggleSelect(index)}
                    isSelected={selectedProducts[index]}
                    onRemoveProduct={handleRemoveProduct}
                  />
                ))
              ) : (
                <div className="emptyCartMessage text-center text-2xl font-medium py-8">
                  Your cart is empty.{" "}
                  <Link
                    to="/accessories"
                    className="text-blue-500 hover:underline"
                  >
                    Continue shopping
                  </Link>
                </div>
              )}
            </div>
            <div className="orderSummary flex flex-col justify-start p-8 bg-white rounded-lg shadow-md md:ml-8 md:w-1/3 min-w-full md:min-w-[300px] mt-8 md:mt-0">
              <h2 className="text-3xl font-semibold mb-8">Order Summary</h2>
              <div className="flex flex-row justify-between text-xl font-normal py-4">
                <div className="shipping">Shipping</div>
                <div className="shipping">Free</div>
              </div>
              <div className="flex flex-row justify-between text-xl font-medium py-4">
                <div className="total">Subtotal (LKR)</div>
                <div className="total">{calculateSubtotal().toFixed(2)}</div>
              </div>
              <div className="flex justify-center text-xl font-medium py-4">
                <button
                  type="button"
                  onClick={handleCheckout}
                  className="blue-button text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  disabled={selectedProducts.every((selected) => !selected)}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to="/accessories"
              className="text-lg text-blue-500 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
