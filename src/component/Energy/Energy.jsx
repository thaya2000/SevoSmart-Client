import React from "react";
import "./Energy.css";
import Battery from "../../Images/Images2/battery1.png";
import Inverter from "../../Images/Images2/inverter1.png";
import SolarPanel from "../../Images/Images2/solarpanal1.png";
import SolarRoof from "../../Images/Images2/solarroof1.png";
import Navigation from "../../component/Navigation/Navigation";
import { Link } from "react-router-dom";

const Product = ({ image, name }) => {
  return (
    <div className="product">
      <img className="product-image" src={image} alt="" />
      <div className="name">{name}</div>
      <div className="button">
        <Link to='/energy-order'>
          <button className="e-button-1">Learn</button>
        </Link>
        <Link to='/solar-learnmore'>
          <button className="e-button-2">Order</button>
        </Link>
        
      </div>
    </div>
  );
};

const Energy = () => {
  return (
    <div className="Energy">
      
      <div className="products">
        <Product image={SolarPanel} name="Solar Panels" />
        <Product image={SolarRoof} name="Solar Roofs" />
        <Product image={Inverter} name="Inverter" />
        <Product image={Battery} name="Battery" />
      </div>

      <div className="options">
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