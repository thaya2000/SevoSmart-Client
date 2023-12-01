import React from 'react'
import './Shop.css'
import { UilArrowRight } from '@iconscout/react-unicons';
import SolarLight from '../../images/SolarLight.png';
import SolarThings from '../../images/SolarThings.png';
import Apparel from '../../images/Apparel.png';

const Shop = () => {
  return (
    <div className='Shop'>
    <div className="ShopProducts">
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
      
      <div className="arrow-button">
        <button><UilArrowRight /></button>
        <div className="name">Explore More</div>
      
      </div>

    </div>
      
      
    
    
  </div>
  )
}

export default Shop