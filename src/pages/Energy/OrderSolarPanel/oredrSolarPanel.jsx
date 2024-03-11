import React, { useState, useEffect } from 'react';
// import Link  from 'react-router-dom';
import image1 from '../../../Images/S1.jpeg';
import image2 from '../../../Images/S2.jpeg';
import image3 from '../../../Images/S3.jpeg';
import './orderSolarPanel.css';



function OrderSolarPanel() {
  

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
    console.log('Combined Form submitted:', formData);
  };

  

  return (
    <div>

    <div className="image-container">
        
      <img src={currentImageIndex === 0 ? image1 : currentImageIndex === 1 ? image2 : image3} alt="" className="image" />

      <div className="main-container">
        <div className="upper-container">
          {/* Content for the container above "Enter Account Details" */}
          <h2 className="power-up">Power Up Everything by Solar</h2>
          <p className="home">Enter home address</p>

          <div>
            <label htmlFor="home address">Home Address</label>
            <input
              type="text"
              id="home address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="ebill">Average electric bill required per month</label>
            <input
              type="text"
              id="ebill"
              name="ebill"
              value={formData.ebill}
              onChange={handleChange}
              defaultValue="LKR/month"
              required
            />
          </div>
        </div>
        <div className="account-details-form">
          <h2 className="cproduct">Choose a product</h2>
          <form onSubmit={handleSubmit}>
            <span className="help-text">
              <a href="/help-choose-product" target="_blank" rel="noopener noreferrer">
                Help me choose the product
              </a>
            </span>

            <div>
              <img
                src={require('../../Images/Images2/S4.jpg')}
                alt="10 Kw Solar System Off Grid"
                className="product-image"
                style={{ width: '300px', height: 'auto' }}
              />
              <p className="product-name">10 Kw Solar System Off Grid</p>
            </div>

            <div>
              <img
                src={require('../../Images/Images2/S5.jpg')}
                alt="5Kw Solar System Off Grid"
                className="product-image"
                style={{ width: '300px', height: 'auto' }}
              />
              <p className="product-name">5 Kw Solar System Off Grid</p>
            </div>

            <div>
              <img
                src={require('../../Images/Images2/S6.jpg')}
                alt="3 Kw Solar System Off Grid"
                className="product-image"
                style={{ width: '300px', height: 'auto' }}
              />
              <p className="product-name">3 Kw Solar System Off Grid</p>
            </div>
            <div className="agreement-statement">Panels for your existing roof with backup protection</div>

            <button className="nextB" type="button" >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OrderSolarPanel;
