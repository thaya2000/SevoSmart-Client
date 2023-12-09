import React from 'react'
import { AcmeLogo } from '../../components/nav/AcmeLogo'
import "./Signup_step1.css"


export const Signup_step1 = () => {
  return (
    <div>

<div className="Signup_step1-background">
  <div className="Signup_step1-container">
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
