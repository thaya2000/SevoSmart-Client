import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import './Content.css';
import SolarBg from '../../Images/SolarBg.png';
import c1 from '../../Images/Images2/c1.jpg';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';


const ContentConstructions = () => {
  return (
    <div className="all">
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
      <Footer/>
    </div>
    
  )
}

export default ContentConstructions