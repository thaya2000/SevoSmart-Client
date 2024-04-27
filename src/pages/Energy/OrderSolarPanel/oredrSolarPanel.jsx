import React, { useState, useEffect } from 'react';
// import Link  from 'react-router-dom';
import image1 from '../../../Images/S1.jpeg';
import image2 from '../../../Images/S2.jpeg';
import image3 from '../../../Images/S3.jpeg';
import image4 from '../../../Images/S4.jpg';
import image5 from '../../../Images/S5.jpg';
import image6 from '../../../Images/S6.jpg';
import './orderSolarPanel.css';



function OrderSolarPanel() {
  

  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
  useEffect(() => {
    const images = [image1, image2, image3];

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

 
  

  return (
    <div>

    <div className="image-container">
        
      <img src={currentImageIndex === 0 ? image1 : currentImageIndex === 1 ? image2 : image3} alt="" className="image" />

      <div className="main-containerA">
        <div className="upper-container">
          {/* Content for the container above "Enter Account Details" */}
          <div className="power-up">Power Up Everything by Solar</div>
          <div className="homeN">Enter home Details</div>

          <div>
            <label htmlFor="home address">Home Address</label>
            <input
              type="text"
              id="home address"
              name="address"
              // onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="ebill">Average electric bill required per month</label>
            <input
              type="text"
              id="ebill"
              name="ebill"
              // onChange={handleChange}
              defaultValue="LKR/month"
              required
            />
          </div>
          
        <div className="account-details-formA">
          <h2 className="cproductA">Choose a product</h2>
          
            <span className="help-text">
              <a href="/help-choose-product" target="_blank" rel="noopener noreferrer"  >
                Help me choose the product
              </a>
            </span>

            <div>
              <img
                src={image4}
                alt="10 Kw Solar System Off Grid"
                className="product-image"
                style={{ width: '300px', height: 'auto' }}
              />
              <p className="product-name">10 Kw Solar System Off Grid</p>
            </div>

            <div>
              <img
                src={image5}
                alt="5Kw Solar System Off Grid"
                className="product-image"
                style={{ width: '300px', height: 'auto' }}
              />
              <p className="product-name">5 Kw Solar System Off Grid</p>
            </div>

            <div>
              <img
                src={image6}
                alt="3 Kw Solar System Off Grid"
                className="product-image"
                style={{ width: '300px', height: 'auto' }}
              />
              <p className="product-name">3 Kw Solar System Off Grid</p>
            </div>
            <div className="agreement-statementO">Panels for your existing roof with backup protection</div>

            <div className='energy-order-buttonB'>Next</div>
          
        </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OrderSolarPanel;
