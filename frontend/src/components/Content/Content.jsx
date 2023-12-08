import React, { useEffect, useRef } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "./Content.css";
import SolarBg from "../../images/SolarBg.png";
import ConstructionsBg from "../../images/ConstructionsBg.jpg";

const Content = () => {
    useEffect(() => {
    const spans = document.querySelectorAll('.contentTitle > span');
    spans.forEach((span) => {
      span.classList.add('animating');
    });
    }, []);
  
  
  
  return (
    <div className="content">
      <div className="contentTitle">
        <span>Delivering the Best
              Smart Home solutions in
              Sri Lanka.</span>
      </div>

      <div className="Accessories"></div>
    </div>
  );
};

export default Content;
