import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ScrollTrigger from "react-scroll-trigger";
import "./Content.css";
import SolarBg from "../../images/SolarBg.png";
import ConstructionsBg from "../../images/ConstructionsBg.jpg";
import SolarPanelLearnmore from "../SolarPanelLearnmore/SolarPanelLearnmore";

const ContentSolar = () => {
  return (
    <div
      className="contentSolar"
      style={{ backgroundImage: `url(${SolarBg})` }}
    >
      <div className="SolarTitle">
        <span>Solar Panels</span>
      </div>
      <div className="SolarButtons">
        <button className="SButton1">Order now</button>
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
