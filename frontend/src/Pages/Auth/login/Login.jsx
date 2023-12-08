import React from 'react'
import { UilTimes, UilUser } from "@iconscout/react-unicons";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import "./Login.css";
import ConstructionsBg from '../../../images/ConstructionsBg.jpg';


const Login = () => {
  return (

    <div className="logincontainer">
      <div className="login-header">
          <img src={logo} alt="" />
          <Link to="/">
              <button className='login-close-button'><UilTimes /></button>
          </Link>
      </div>
      <div className="login-Card" style={{ backgroundImage: `url(${ConstructionsBg})` }}>
          <div className="login-card" >
            <span className='signin'>Sign In</span>
            <div className="inputs">
            <div className="user-name-input">
              <div>
                <text>User Name</text>
              </div>
              <div className="input-container">
                <input type="text" />
              </div>
            </div>

            <div className="password-input">
              <div>
                <text>Password</text>
              </div>

              <div className="input-container">
                <input type="password" />
              </div>
            </div>
        </div>
        <div className="submit-container">
            <button className="login-button">Sign In</button>
            <div className="underline-container">
              <div className="underline"></div>
              <div className="or-text">
                <text>Or</text>
              </div>
              <div className="underline"></div>
            </div>
            {/* <Link to='/signup'> */}
              <button className="create-account-button">Create Account</button>
            {/* </Link> */}
            
        </div>
      </div>
      </div>
      

          

          
    </div>

  );
};

export default Login