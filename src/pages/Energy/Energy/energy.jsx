import React, { useState, useEffect } from "react";
import "./energy.css";

import image1 from "../../../Images/S1.jpeg";
import image2 from "../../../Images/S2.jpeg";
import image3 from "../../../Images/S3.jpeg";

function AccountDetailsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
    nameOnCard: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const images = [image1, image2, image3];

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Combined Form submitted:", formData);
  };

  return (
    <div>
      <div className="image-container">
        <img
          src={
            currentImageIndex === 0
              ? image1
              : currentImageIndex === 1
              ? image2
              : image3
          }
          alt=""
          className="image"
        />

        <div className="main-container">
          <div className="upper-container">
            {/* Content for the container above "Enter Account Details" */}
            <div className="order-summery">Order Summary</div>
            <div className="price">
              Final Price will be provided when your system design is complete
            </div>
          </div>
          <div className="account-details-form">
            <div className="Enter-account">Enter Account Details</div>
            <form onSubmit={handleSubmit}>
              {/* Account Details */}
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <div>
                <label htmlFor="confirmEmail">Confirm Email Address</label>
                <input
                  type="email"
                  id="confirmEmail"
                  name="confirmEmail"
                  value={formData.confirmEmail}
                  onChange={handleChange}
                  required
                />
              </div> */}

              <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* <div className="agreement-statement">
                By entering my account details above, I agree to be contacted
                about Sevo Smart products, including through automated calls or
                texts. This is not a condition of purchase.
              </div>

              
              <div>
                <div className="Enter-card">Enter Card Details</div>
                <label htmlFor="nameOnCard">Name on Card</label>
                <input
                  type="text"
                  id="nameOnCard"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="expirationMonth">Expiration Month</label>
                <input
                  type="text"
                  id="expirationMonth"
                  name="expirationMonth"
                  value={formData.expirationMonth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="expirationYear">Expiration Year</label>
                <input
                  type="text"
                  id="expirationYear"
                  name="expirationYear"
                  value={formData.expirationYear}
                  onChange={handleChange}
                  required
                />
              </div> */}

              {/* <button className='energy-order-button' type="submit">Submit</button> */}
              <div className="energy-order-buttonA">Submit</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountDetailsForm;
