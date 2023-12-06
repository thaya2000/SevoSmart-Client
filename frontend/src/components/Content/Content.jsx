import React, { useEffect, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "./Content.css";
import SolarBg from "../../images/SolarBg.png";
import ConstructionsBg from "../../images/ConstructionsBg.jpg";

const Content = () => {
  return (
    <div className="content">
      <div className="contentTitle">
        <span>Delivering the Best</span>
        <span>Smart Home solutions in</span>
        <span>Sri Lanka.</span>
      </div>

      <div className="Accessories"></div>
    </div>
  );
};

export default Content;
