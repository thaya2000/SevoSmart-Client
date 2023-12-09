import React from "react";
import { UilTimes, UilUser } from "@iconscout/react-unicons";
import "./Navigation.css";
import { Link } from "react-router-dom";

const NavigationVertical = () => {
  return (
    <div className="navigation-vertical">
      <div className="flex justify-end pt-6 pr-6">
        <Link to="/">
          <button>
            <UilTimes className="rounded p-1 hover:bg-black/5" size={40} />
          </button>
        </Link>
      </div>
      <div className="navi-buttons">
        <button className="py-1 px-3 ">Energy</button>
        <button className="py-1 px-3 ">Constructions</button>
        <button className="py-1 px-3 ">Shop</button>
        <button className="py-1 px-3 ">Discover</button>
        <button className="py-1 px-3 ">Support</button>
      </div>
      <div className="account-button">
        <UilUser />
      </div>
    </div>
  );
};

export default NavigationVertical;
