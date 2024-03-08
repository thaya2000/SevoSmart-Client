import "./Energy.css";
import Battery from "../../../../Images/Images2/battery1.png";
import Inverter from "../../../../Images/Images2/inverter1.png";
import SolarPanel from "../../../../Images/Images2/solarpanal1.png";
import SolarRoof from "../../../../Images/Images2/solarroof1.png";
import { Link } from "react-router-dom";

const Product = ({ image, name }) => {
  return (
    <div className="energy-product">
      <img className="energy-product-image" src={image} alt="" />
      <div className="energy-product-name">{name}</div>
      <div className="flex items-center justify-around w-6/10">
        <Link to="/energy-order">
          <button className="energy-button">Learn</button>
        </Link>
        <Link to="/solar-learnmore">
          <button className="energy-button">Order</button>
        </Link>
      </div>
    </div>
  );
};

const Energy = () => {
  return (
    <div className="Energy border-2">
      <div className="products border-2">
        <Product image={SolarPanel} name="Solar Panels" />
        <Product image={SolarRoof} name="Solar Roofs" />
        <Product image={Inverter} name="Inverter" />
        <Product image={Battery} name="Battery" />
      </div>

      <div className="energy-options">
        <div className="list">
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

export default Energy;
