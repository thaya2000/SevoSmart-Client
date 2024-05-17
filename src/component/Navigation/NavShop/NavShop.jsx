import "./NavShop.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import SolarLight from "../../../Images/SolarLight.png";
import SolarThings from "../../../Images/SolarThings.png";
import { NavLink } from "react-router-dom";

const NavShop = () => {
  return (
    <NavLink to="/accessories">
      <div className="shop">
        <div className="shop-products">
          <div className="shop-product">
            <img src={SolarLight} alt="" />
            <div className="shop-item-name">Solar Lights</div>
          </div>
          <div className="shop-product">
            <img src={SolarThings} alt="" />
            <div className="shop-item-name">Solar Accessories</div>
          </div>
          <div className="arrow-button">
            <button>
              <FaRegArrowAltCircleRight size="50px" />
            </button>
            <div className="shop-item-name">Explore More</div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default NavShop;
