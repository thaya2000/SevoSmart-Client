import React from 'react'
import './Constructions.css'
import NewBuilding from '../../images/NewBuilding.png';
import Renovation from '../../images/Renovation.png';
import SwimmingPool from '../../images/SwimmingPool.png';
import Havana from '../../images/Havana.png';


const Constructions = () => {
  return (
    <div className='Constructions'>
      <div className="Cproducts">
        <div className="Cproduct01">
          
          <img src={NewBuilding} alt="" />
          <div className="name">New Building Construction</div>
          
        </div>
        <div className="Cproduct01">
          <img src={Renovation} alt="" />
          <div className="name">Old Building Renovation</div>
          
        </div>
        <div className="Cproduct01">
          <img src={SwimmingPool} alt="" />
          <div className="name">Swimming Pool Design</div>
          
        </div>
        <div className="Cproduct01">
          <img src={Havana} alt="" />
          <div className="name">Havana design</div>
          
        </div>
 
      </div>
        
        
      
      <div className="Coptions">
        <div className="list">
        <span>Schedule a Consultation</span>
        <span>About Team</span>
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

export default Constructions