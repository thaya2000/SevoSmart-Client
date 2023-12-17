import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import "./Content.css";
import Solar from "../../images/images2/solar.jpg";
import ConstructionsBg from "../../images/ConstructionsBg.jpg";
import SolarPanelLearnmore from "../SolarPanelLearnmore/SolarPanelLearnmore";

const ContentSolar = () => {
  return (
    <div
      className="contentSolar" id="contentSolar"
      style={{ backgroundImage: `url(${Solar})` }}
    >
      <div className="SolarTitle justify-center">
        <span>Solar Panels</span>
      </div>
      <div className="SolarButtons justify-center">
        <Link to="/energy-order">
        <button className="SButton1">Order now</button>
        </Link>
        <Link to="/solar-learnmore">
        <button className="SButton2">
          Learn more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContentSolar;
