import React from "react";
import "./NavConstruction.css";
import NewBuilding from "../../../Images/NewBuilding.png";
import Renovation from "../../../Images/Renovation.png";
import SwimmingPool from "../../../Images/SwimmingPool.png";
import Havana from "../../../Images/Havana.png";
import { Link } from "react-router-dom";
import { UilAngleLeft, UilTimes } from "@iconscout/react-unicons";

const ConstructionProduct = ({ image, name }) => {
  return (
    <div className="Cproduct-vertical">
      <img className="Cproduct-image" src={image} alt="" />
      <Link to="/construction-learnmore">
        <div className="name">{name}</div>
      </Link>
    </div>
  );
};

const ConstructionsVertical = () => {
  return (
    <div className="Construction-vertical">
      <div className="header-energy">
        <div className="back-arrow">
          <Link to="/menu">
            <button>
              <UilAngleLeft />
            </button>
          </Link>
        </div>
        <div className="title-energy">
          <span>Constructions</span>
        </div>
        <div className="close-icon">
          <Link to="/">
            <UilTimes />
          </Link>
        </div>
      </div>
      <div className="Cproducts-vertical">
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

      <div className="options-vertical">
        <div className="list-vertical">
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

export default ConstructionsVertical;
