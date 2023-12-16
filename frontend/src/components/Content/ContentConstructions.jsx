import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './Content.css';
import SolarBg from '../../images/SolarBg.png';
import c1 from '../../images/images2/c1.jpg';
import { Link } from "react-router-dom";


const ContentConstructions = () => {
  return (
    <div className="contentConstruction" id="contentConstructions" style={{ backgroundImage: `url(${c1})` }}>
        <div className="ConstructionTitle">
          <span>Constructions</span>
        </div>
        <div className="ConstructionButtons">
        <Link to="/new-building-consultation">
        <button className='CButton1' >Book a call</button>
        </Link>
        <Link to="/construction-learnmore">
          <button className='CButton2' >Learn more</button>
        </Link>
          
        </div>
      </div>
  )
}

export default ContentConstructions