import React from "react";
import { UilTimes, UilUser } from "@iconscout/react-unicons";
import "./Navigation.css";
import { Link } from "react-router-dom";

const NavigationVertical = () => {
  return (
    <div className="navigation-vertical">
      <div className="close-button">
        <Link to="/">
          <button>
            <UilTimes />
          </button>
        </Link>
      </div>
      <div className="navi-buttons">
        <Link to="/energy-vertical">
          <button className="navi-butt">Energy</button>
        </Link>
        <Link to="/construction-vertical">
          <button className="navi-butt">Constructions</button>
        </Link>
        <Link to="/shop-vertical">
          <button className="navi-butt">Shop</button>
        </Link>
        <Link to="/discover-vertical">
          <button className="navi-butt">Discover</button>
        </Link>

        <button className="navi-butt">Support</button>
      </div>
      <div className="account-button">
        {/* <Link to="/login"> */}
          <UilUser />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default NavigationVertical;
