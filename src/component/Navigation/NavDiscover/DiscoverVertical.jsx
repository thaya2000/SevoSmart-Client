import React from "react";
import "./NavDiscover.css";
import { Link } from "react-router-dom";
import { UilAngleLeft, UilTimes } from "@iconscout/react-unicons";

const DiscoverVertical = () => {
  return (
    <div className="DiscoverVertical">
      <div className="header-energy">
        <div className="back-arrow">
          <Link to="/menu">
            <button>
              <UilAngleLeft />
            </button>
          </Link>
        </div>
        <div className="title-energy">
          <span>Discover</span>
        </div>
        <div className="close-icon">
          <Link to="/">
            <UilTimes />
          </Link>
        </div>
      </div>
      <div className="options-vertical">
        <span>About us</span>
        <span>Careers</span>
        <span>Inverstor Relations</span>

        <span>Video Guides</span>
        <span>Customer Stories</span>
        <span>Events</span>
      </div>
    </div>
  );
};

export default DiscoverVertical;
