
import "./Signup_step1.css"
 
import { Link } from "react-router-dom";
import { UilTimes, UilUser } from "@iconscout/react-unicons";
import logo from "../../../Images/logo.png";
import React from 'react'
import ConstructionsBg from '../../../Images/ConstructionsBg.jpg';


const Signup_step1 = () => {
  return (
    
       

    <div className="Signup_step1-background" >
        <div className="login-header">
          <img src={logo} alt="" />
          <Link to="/">
              <button className='login-close-button'><UilTimes /></button>
          </Link>
      </div>
      <div className="signup-card" >
          <div className="Signup_step1-container"style={{ backgroundImage: `url(${ConstructionsBg})` }} >
              <div className="Signup_step1-header">
                <div className="create-account1-text">Create Account</div>
              </div>

            <div className="Signup_step1-inputs">
              <div className="Signup_step1-email-input">
                <div>
                  <text>Email</text>
                </div>
                <div className="Signup_step1-input-container">
                  <input type="text" />
                </div>
              </div>

              <div className="Signup_step1-username-input">
                <div>
                  <text>User Name</text>
                </div>

                <div className="Signup_step1-input-container">
                  <input type="password" />
                </div>
              </div>

              <div className="Signup_step1-phone-no-input">
                <div>
                  <text>Phone No</text>
                </div>
                <div className="Signup_step1-input-container">
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="Signup_step1-submit-container">
              <button className="next-button">Next</button>

        
            </div>
          </div>
        </div>
        
      </div>
    
  )
}

export default Signup_step1

