import "./NavEnergy.css";
import Battery from "../../../Images/Images2/battery1.png";
import Inverter from "../../../Images/Images2/inverter1.png";
import SolarPanel from "../../../Images/Images2/solarpanal1.png";
import SolarRoof from "../../../Images/Images2/solarroof1.png";
import { Link } from "react-router-dom";

const Product = ({ image, name }) => {
  return (
    <div className="energy-nav-product">
      <img className="energy-nav-product-image" src={image} alt="" />
      <div className="energy-nav-product-name">{name}</div>
      <div className="flex items-center justify-around w-6/10">
        <Link to="/energy-learnmore">
          <div className="energy-nav-button">Learn</div>
        </Link>
        <Link to="guest/solar/consultation">
          <div className="energy-nav-button">Order</div>
        </Link>
      </div>
    </div>
  );
};

const NavEnergy = () => {
  return (
    <div className="energy-nav border-2">
      <div className="energy-nav-products border-2">
        <Product image={SolarPanel} name="Solar Panels" />
        <Product image={SolarRoof} name="Solar Roofs" />
        <Product image={Inverter} name="Inverter" />
        <Product image={Battery} name="Battery" />
      </div>

      <div className="energy-nav-options">
        <div className="energy-nav-list">
          <span>Schedule a Consultation</span>
          <span>Why Solar</span>
          <span>Incentives</span>
          <span>Support</span>
          <span>Partner with Sevo</span>
          <span>Commercial</span>
          <span>Utilities</span>
        </div>
      </div>
    </div>
  );
};

export default NavEnergy;
