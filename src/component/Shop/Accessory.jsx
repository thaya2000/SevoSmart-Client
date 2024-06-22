import { userAuth } from "../../context/authContext";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Accessory = ({
  accessory_image,
  accessory_image_url,
  accessory_name,
  accessory_price,
  accessory_id,
  accessory_description,
}) => {
  const [auth, setAuth] = userAuth();
  const navigate = useNavigate();
  const data = {
    accessory_name: accessory_name,
    accessory_id: accessory_id,
    accessory_price: accessory_price,
    accessory_image: accessory_image,
    accessory_image_url: accessory_image_url,
    accessory_description: accessory_description,
  };
  const { user } = useSelector((state) => state.auth);

  // const imgData = `data:image/jpg;base64,${accessory_image}`;

  const addToCart = async () => {
    try {
      await axios.post(
        `/api/v1/user/addProductToCart/${accessory_id}/${user.userId}`
      );
      toast.success("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      toast.error("Error adding product to cart. Please try again later.");
    }
  };
 

  const navigateToProductDetails = () => {
    // console.log("Accessory name:", accessory_name);
    // console.log("Accessory price:", accessory_price);
    // console.log("Accessory ID:", accessory_id);
    // console.log(accessory_image);
    console.log("Accessory image url:", accessory_image_url);

    navigate(`/product-details/${accessory_id}`, {
      state: data,
    });
  };

  return (
    <div className="flex flex-col items-center border-2 border-black rounded-2xl w-80">
      <div onClick={navigateToProductDetails}>
        <img
          className="flex justify-self-center mt-2 py-3 h-60 w-60"
          src={accessory_image_url}
          alt={accessory_name}
        />
        <div className="flex justify-items-center text-4xl font-bold py-3">
          {accessory_name}
        </div>
        <div className="flex justify-items-center text-3xl font-bold text-red-600 py-3">
          {accessory_price} LKR
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 items-center py-3">
        <button
          onClick={addToCart}
          className="text-white bg-blue-900 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center w-32 h-10 mb-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Add to Cart
        </button>
        <Link
          onClick={addToCart}
          to="/cart"
          className="text-white bg-yellow-900 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center w-32 h-10 mb-5"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};

Accessory.propTypes = {
  accessory_image: PropTypes.string.isRequired,
  accessory_name: PropTypes.string.isRequired,
  accessory_price: PropTypes.number.isRequired,
  accessory_id: PropTypes.string.isRequired,
  accessory_image_url: PropTypes.string.isRequired,
  accessory_description: PropTypes.string.isRequired,
};

export default Accessory;
