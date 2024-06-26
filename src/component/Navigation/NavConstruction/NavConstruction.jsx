import React from "react";
import "./NavConstruction.css";
import NewBuilding from "../../../Images/NewBuilding.png";
import Renovation from "../../../Images/Renovation.png";
import SwimmingPool from "../../../Images/SwimmingPool.png";
import Havana from "../../../Images/Havana.png";
import { NavLink } from "react-router-dom";

const ConstructionProduct = ({ image, name }) => {
  return (
    <NavLink to="/construction-learnmore">
      <div className="construction-nav-product">
        <img className="construction-nav-product-image" src={image} alt={name} />
        <div className="construction-nav-product-name">{name}</div>
      </div>
    </NavLink>
  );
};

const NavConstruction = () => {
  return (
    <div className="constructions-nav">
      <div className="construction-nav-products">
        <ConstructionProduct
          image={NewBuilding}
          name="New Building Construction"
        />
        <ConstructionProduct
          image={Renovation}
          name="Old Building Renovation"
        />
        <ConstructionProduct
          image={SwimmingPool}
          name="Swimming Pool Design"
        />
        <ConstructionProduct
          image={Havana}
          name="Havana Design"
        />
      </div>

      <div className="construction-nav-options">
        <div className="construction-nav-list">
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

export default NavConstruction;
