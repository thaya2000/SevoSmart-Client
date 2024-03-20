import React from "react";

import "./Signup_step2.css";

export const Signup_step2 = () => {
  return (
    <div>
      {/* <AcmeLogo /> */}
      <div className="Signup_step2-background">
        <div className="Signup_step2-container">
          <div className="Signup_step2-header">
            <div className="create-account2-text">Create Account</div>
          </div>

          <div className="Signup_step2-inputs">
            <div className="Signup_step2-password-input">
              <div>
                <text>Password</text>
              </div>
              <div className="Signup_step2-input-container">
                <input type="text" />
              </div>
            </div>

            <div className="Signup_step2-confirmpassword-input">
              <div>
                <text>Confirm Password</text>
              </div>

              <div className="Signup_step2-input-container">
                <input type="password" />
              </div>
            </div>

          </div>

          <div className="Signup_step2-submit-container">
            {/* <button className="create-account-button">Create Account</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
