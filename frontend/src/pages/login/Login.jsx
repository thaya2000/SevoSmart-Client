import React from "react";
import "./Login.css";
import { AcmeLogo } from "../../components/nav/AcmeLogo";

export const Login = () => {
  return (
    <div>
      <AcmeLogo />

      <div className="login-background">
        <div className="logincontainer">
          <div className="header">
            <div className="text">Sign In</div>
          </div>

          <div className="inputs">
            <div className="user-name-input">
              <div>
                <text>User Name</text>
              </div>
              <div className="input-container">
                <input className="username" type="text" />
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
            <button className="login-button">Log In</button>
            <div className="underline-container">
              <div className="underline"></div>
              <div className="or-text">
                <text>Or</text>
              </div>
              <div className="underline"></div>
            </div>

            <button className="create-account-button">Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
