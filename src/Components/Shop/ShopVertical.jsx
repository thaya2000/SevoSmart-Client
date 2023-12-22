import React from 'react'
import './Shop.css'
import { UilArrowRight } from '@iconscout/react-unicons';
import SolarLight from '../../Images/SolarLight.png';
import SolarThings from '../../Images/SolarThings.png';
import Apparel from '../../Images/Apparel.png';
import { UilAngleLeft, UilTimes } from '@iconscout/react-unicons';
import { Link } from "react-router-dom";

const ShopVertical = () => {
  return (
      <div className='ShopVertical'>
          <div className="header-energy">
              <div className="back-arrow">
                  <Link to="/menu">
                      <button><UilAngleLeft /></button>
                  </Link>
                  
              </div>
              <div className="title-energy">
                  <span>Shop</span>
              </div>
              <div className="close-icon">
                    <Link to="/">
                      <UilTimes />
                    </Link>
                  
              </div>
            </div>
            <div className="ShopProducts-vertical">
                <div className="Sproduct01">
            
                    <img src={SolarLight} alt="" />
                    <div className="name">Solar Lights</div>
            
                </div>
                <div className="Sproduct01">
                    <img src={SolarThings} alt="" />
                    <div className="name">Solar Accessories</div>
            
                </div>
                <div className="Sproduct01">
                    <img src={Apparel} alt="" />
                    <div className="name">Apparel</div>
            
                </div>
        
                <div className="Sproduct01 arrow-button">
                    <button><UilArrowRight /></button>
                    <div className="name">Explore More</div>
        
                </div>

        </div>
    </div>
      
      
    
    
  
  )
}

export default ShopVertical