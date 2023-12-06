import React from "react";
import "./Constructions.css";
import NewBuilding from "../../images/NewBuilding.png";
import Renovation from "../../images/Renovation.png";
import SwimmingPool from "../../images/SwimmingPool.png";
import Havana from "../../images/Havana.png";

const ConstructionProduct = ({ image, name }) => {
  return (
    <div className="Cproduct">
      <img className="Cproduct-image" src={image} alt="" />
      <div className="name">{name}</div>
    </div>
  );
};

const Constructions = () => {
  return (
    <div className="Constructions">
      <div className="Cproducts">
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

      <div className="Coptions">
        <div className="list">
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
