import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartProduct from "../../component/Shop/CartProduct";
import axios from "axios";
import { useSelector } from "react-redux";
import RambousLoader from "../../routes/RambousLoader";
import "./Cart.css"; // Make sure to import the CSS file

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.userId) {
      loadCartProducts();
      console.log(cartProducts);
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
      console.log(result.data );
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
    const selectedProductIds = cartProducts
      .filter((_, index) => selectedProducts[index])
      .map((cartProduct) => cartProduct.product.productId);
    navigate("/address", { state: { selectedProductIds } });
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

  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <RambousLoader />
      ) : (
        <div className="flex flex-col mx-5">
          <div className="cardTitleContainer text-center mb-8">
            <h1 className="text-4xl font-bold">Shopping Cart</h1>
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
                  />
                ))
              ) : (
                <div className="emptyCartMessage text-center text-2xl font-medium py-8">
                  Your cart is empty.{" "}
                  <Link to="/accessories" className="text-blue-500 hover:underline">
                    Continue shopping
                  </Link>
                </div>
              )}
            </div>
            <div className="orderSummary flex flex-col justify-start p-8 bg-white rounded-lg shadow-md md:ml-8 md:w-1/3 min-w-full md:min-w-[300px]">
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
