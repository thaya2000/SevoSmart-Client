import React from 'react'
import './Energy.css'
import Battery from '../../images/Battery.png';
import Inverter from '../../images/Inverter.png';
import SolarPanel from '../../images/SolarPanel.png';
import SolarRoof from '../../images/SolarRoof.png';


const Energy = () => {
  return (
    <div className='Energy'>
      <div className="products">
        <div className="product01">
          
          <img src={SolarPanel} alt="" />
          <div className="name">Solar Panels</div>
          <div className="button">
            <button>Learn</button>
            <button>Order</button>
          </div>
        </div>
        <div className="product01">
          <img src={SolarRoof} alt="" />
          <div className="name">Solar Roofs</div>
          <div className="button">
            <button>Learn</button>
            <button>Order</button>
          </div>
        </div>
        <div className="product01">
          <img src={Inverter} alt="" />
          <div className="name">Inverter</div>
          <div className="button">
            <button>Learn</button>
            <button>Order</button>
          </div> 
        </div>
        <div className="product01">
          <img src={Battery} alt="" />
          <div className="name">Battery</div>
          <div className="button">
            <button>Learn</button>
            <button>Order</button>
          </div>
        </div>
        
 
      </div>
        
        
      
      <div className="options">
        <div className='list'>
        <span>Schedule a Consultation</span>
        <span>Why Solar</span>
        <span>Incentives</span>
        <span>Support</span>
        <span>Partner with Sevo</span>
        <span>Commercial</span>
        <span>Utilities</span>
        </div>
        
      </div>
    </div>
  )
}

export default Energy