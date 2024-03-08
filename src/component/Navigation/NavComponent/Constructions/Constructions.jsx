import React from "react";
import "./Constructions.css";
import NewBuilding from "../../../../Images/NewBuilding.png";
import Renovation from "../../../../Images/Renovation.png";
import SwimmingPool from "../../../../Images/SwimmingPool.png";
import Havana from "../../../../Images/Havana.png";
import { Link } from "react-router-dom";

const ConstructionProduct = ({ image, name }) => {
  return (
    <div className="construction-product">
      <img className="construction-product-image" src={image} alt="" />
      <div className="construction-name">{name}</div>
    </div>
  );
};

const Constructions = () => {
  return (
    <div className="constructions">
      <div className="construction-products ">
        <ConstructionProduct
          image={NewBuilding}
          name="New Building Construction"
        />
        <ConstructionProduct
          image={Renovation}
          name="Old Building Renovation"
        />
        <ConstructionProduct image={SwimmingPool} name="Swimming Pool Design" />
        <ConstructionProduct image={Havana} name="Havana Design" />
      </div>

      <div className="construction-options">
        <div className="construction-list ">
          <span>Schedule a Consultation</span>
          <span>About Team</span>
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

export default Constructions;
