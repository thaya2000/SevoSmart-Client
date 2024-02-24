import React from "react";
import "./Constructions.css";
import NewBuilding from "../../../../Images/NewBuilding.png";
import Renovation from "../../../../Images/Renovation.png";
import SwimmingPool from "../../../../Images/SwimmingPool.png";
import Havana from "../../../../Images/Havana.png";
import { Link } from "react-router-dom";

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
          <Link to="/new-building-consultation">
            <span className="c-span">Schedule a Consultation</span>
          </Link>

          <span className="c-span">About Team</span>
          <span className="c-span">Incentives</span>
          <span className="c-span">Support</span>
          <span className="c-span">Partner with Sevo</span>
          <span className="c-span">Commercial</span>
          <span className="c-span">Utilities</span>
        </div>
      </div>
    </div>
  );
};

export default Constructions;
