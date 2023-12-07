import React from 'react'
import { UilTimes, UilUser } from "@iconscout/react-unicons";
import "./Navigation.css";
import { Link } from "react-router-dom";


const NavigationVertical = () => {
  return (
      <div className='navigation-vertical'>
          <div className="close-button">
              <Link to="/">
                  <button><UilTimes /></button>
              </Link>
              
          </div>
          <div className="navi-buttons">
              <Link to="/energy-vertical">
                  <button>Energy</button>
              </Link>
              
              <button>Constructions</button>
              <button>Shop</button>
              <button>Discover</button>
              <button>Support</button>
          </div>
          <div className="account-button">
              <UilUser/>
          </div>
    </div>
  )
}

export default NavigationVertical