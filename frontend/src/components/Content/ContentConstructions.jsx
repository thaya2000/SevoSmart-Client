import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './Content.css';
import SolarBg from '../../images/SolarBg.png';
import ConstructionsBg from '../../images/ConstructionsBg.jpg';
import { Link } from "react-router-dom";


const ContentConstructions = () => {
  return (
    <div className="contentConstruction" style={{ backgroundImage: `url(${ConstructionsBg})` }}>
        <div className="ConstructionTitle">
          <span>Constructions</span>
        </div>
        <div className="ConstructionButtons">
        <Link to="/Constructions">
        <button className='CButton1' >Construction</button>
        </Link>
        <Link to="/construction-learnmore">
          <button className='CButton2' >Learn more</button>
        </Link>
          
        </div>
      </div>
  )
}

export default ContentConstructions