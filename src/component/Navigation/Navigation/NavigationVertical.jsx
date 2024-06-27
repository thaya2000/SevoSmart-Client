import React from "react";
import { UilTimes, UilUser } from "@iconscout/react-unicons";
import "./Navigation.css";
import { Link } from "react-router-dom";

const NavigationVertical = ({onClose}) => {
  return (
    <div className="navigation-vertical" >
      <div className="close-button">
        
          <button onClick={onClose}>
            <UilTimes />
          </button>
        
      </div>
      <div className="navi-buttons">
        <Link to="/energy-vertical">
          <button className="navi-butt" onClick={onClose}>Energy</button>
        </Link>
        <Link to="/construction-vertical">
          <button className="navi-butt"onClick={onClose}>Constructions</button>
        </Link>
        <Link to="/shop-vertical">
          <button className="navi-butt"onClick={onClose}>Shop</button>
        </Link>
        <Link to="/discover-vertical">
          <button className="navi-butt"onClick={onClose}>Discover</button>
        </Link>

        <button className="navi-butt"onClick={onClose}>Support</button>
      </div>
      <div className="account-button">
        <Link to="/login">
          <UilUser />
        </Link>
      </div>
    </div>
  );
};

export default NavigationVertical;