import React, { useState, useEffect } from "react";
// import Link  from 'react-router-dom';
import "./billcalculation.css";
import Image7 from "../../../Images/S7.jpg";
import { NavLink } from "react-router-dom";

function BillCalculation() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Combined Form submitted:", formData);
  };

  return (
    <div>
      <div className="img-container">
        <div>
          <div className="billhead">Average bill of your home</div>

          <div className="square1"></div>
          <span className="text1">Your electric bill</span>
          <div className="square2"></div>
          <span className="text2">Solar payment</span>
          <div className="container">
            <div className="A-container">
              <span
                className="text3"
                style={{ display: "flex", alignItems: "center" }}
              >
                15000 lkr /month <br />
                without solar
              </span>
              <div className="square3"></div>
            </div>
            <div className="B-container">
              <span
                className="text4"
                style={{ display: "flex", alignItems: "center" }}
              >
                1500 lkr /month <br />
                with solar
              </span>
              <div className="square4"></div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="upper-container">
            {/* Content for the container above "Enter Account Details" */}
            <div className="power">Your Home</div>
            <div className="agreement-statementA">
              Produce clean energy with the lowest cost solar panels, <br />
              price match guaranteed
            </div>

            <div className="M-container">
              <div className="c-container">
                <img
                  src={Image7}
                  alt="3 Kw Solar System Off Grid"
                  className="product-image"
                  style={{ width: "150px", height: "auto" }}
                />
              </div>

              <div className="D-container">
                <span className="agreement-statement">
                  1500 Homes in Trincomalee
                  <br />
                  have solar
                  <br />
                  100/2, Green Road ,<br />
                  Trincomalee, SriLanka.
                </span>
              </div>
            </div>
            <div>
              <span className="text5">
                Solar Panels <br /> produce Green Energy
              </span>
            </div>

            <div className="E-container">
              <span className="text6">Meet current needs</span>
              <span className="your-amount">2,500,000 lkr</span>
              <br />
              <span className="text7">4 kW solar</span>

              <ul className="bullet-points">
                <li>6,111 kWh /yr Solar Production</li>
                <li>125% Energy Offset</li>
              </ul>
            </div>

            <div>
              <span className="text8">Order your system</span>
            </div>

            <NavLink to="/energy">
              <div className="energy-order-buttonA">continue to order</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillCalculation;
