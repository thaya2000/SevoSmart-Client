import React from "react";
import "./NewBuildingConsultation.css";
import { AcmeLogo } from "../../components/nav/AcmeLogo";



export const NewBuildingConsultation = () => {
  return (
    <div className="consultation-page">
   <AcmeLogo/>
      <div className="consultation-background">
      
        <div className="schedule-details">

        </div>
        <div className="personal-details">
        <div className="personal-inputs">
            <div className="personal-user-name-input">
              <div>
                <text>Full Name</text>
              </div>
              <div className="personal-input-container">
                <input className="personal-username" type="text" />
              </div>
            </div>

            <div className="personal-email-id">
              <div>
                <text>Email ID</text>
              </div>

              <div className="personal-input-container">
                <input type="password" />
              </div>
            </div>
            <div className="password-input">
              <div>
                <text>Phone No</text>
              </div>

              <div className="personal-input-container">
                <input type="password" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
      
   
  );
};
