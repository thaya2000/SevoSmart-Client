import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewsPage.css';

import image1 from '../../Images/NewsImages/im1.jpg';
import image2 from '../../Images/NewsImages/im2.jpg';
import image3 from '../../Images/NewsImages/im3.jpg';
import image4 from '../../Images/NewsImages/im4.jpg';
import image5 from '../../Images/NewsImages/im5.jpg';
import image6 from '../../Images/NewsImages/im6.jpg';
import image7 from '../../Images/NewsImages/im7.jpg';
import image8 from '../../Images/NewsImages/im1.jpg';
import image9 from '../../Images/NewsImages/im2.jpg';
import image10 from '../../Images/NewsImages/im3.jpg';
import image11 from '../../Images/NewsImages/im4.jpg';
import image12 from '../../Images/NewsImages/im5.jpg';
import image13 from '../../assets/offer_solar.png';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Import the specific FontAwesome icon



const NewsPage = () => {



  const [newsList] = useState([
    { id: 1, title: "Welcome to our news channel in sevosmart", image: image1, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 2, title: "Welcome to our news channel in sevosmart", image: image2, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 3, title: "Welcome to our news channel in sevosmart", image: image3, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 4, title: "Welcome to our news channel in sevosmart", image: image4, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 5, title: "Welcome to our news channel in sevosmart", image: image5, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 6, title: "Welcome to our news channel in sevosmart", image: image6, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 7, title: "Welcome to our news channel in sevosmart", image: image7, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 8, title: "Welcome to our news channel in sevosmart", image: image8, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 9, title: "Welcome to our news channel in sevosmart", image: image9, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 10, title: "Welcome to our news channel in sevosmart", image: image10, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 11, title: "Welcome to our news channel in sevosmart", image: image11, content: "This is a sample paragraph. Read more to view the full news." },
    { id: 12, title: "Welcome to our news channel in sevosmart", image: image12, content: "This is a sample paragraph. Read more to view the full news." },
  ]);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  const [archiveVisible, setArchiveVisible] = useState(true); // State to manage visibility of the archive container

  const toggleArchiveVisibility = () => {
    setArchiveVisible(!archiveVisible); // Toggle visibility state
  };
  useEffect(() => {
    // Update archive visibility based on window width when window is resized
    const handleResize = () => {
      setArchiveVisible(window.innerWidth >= 800);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <div className="news-page">
      <div className={`archive-container ${archiveVisible ? 'visible' : ''}`}>
      
        <div className="archive">
        {window.innerWidth < 800 && (
          <div className="back-arrow">
          <button  onClick={toggleArchiveVisibility}>
          &larr;
        </button>
          </div>

        )}
        
          <h2>Archive</h2>
          
          <div className="months">
          <ul>
            {/* Add buttons for each month */}
            {months.map((month, index) => (
              <li key={index}>
                <button  type="button">{month}</button>
              </li>
            ))}
          </ul>
          </div>
          
          
        </div>
      </div>


      <div className="pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">.</a>
        <a href="#">.</a>
        <a href="#">.</a>
        {/* Add more numbers for additional pages */}
        <span className="arrow-container">
          <span className="arrow">&rarr;</span>
        </span>
      </div>




      <div className="news-feed-container">
        <div className='news-head'>
            {window.innerWidth < 800 && (

            <button className="archive-toggle" onClick={toggleArchiveVisibility}>
              Archive
            </button>)}
          <span>News Feed</span>

        </div>
        <div className="feed-items-container">
          {newsList.map((news) => (
            <div key={news.id} className="feed-item">
              <Link to={{ pathname: `/newspage/${news.id}`, state: { news } }}>
                <img src={news.image} alt={news.title} />
              </Link>
              <h2>{news.title}</h2>
              <p>{news.content}</p>
              <Link to={{ pathname: `/newspage/${news.id}`, state: { news } }}>
                <button className="read-more">Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* New div for solar discounts */}
      <div className="solar-discounts">
        <h2>Special Offer:  50% Off on Solar Products</h2>
        <p>Upgrade to solar energy today and save big! Limited time offer.</p>
        <div className="offer-container">
          <img src={image13} alt="Solar Panel" className="solar-panel-image" />
          <div className="offer-buttons">
            <button className="round-button">50% Off</button>
            
          </div>
        </div>
        <div className="silver-buttons">
            <button className="silver-button">unbeatable solar solutions</button>
          </div>
          <div className="silver-buttons">
            <button className="silver-button">smart home solutions</button>
          </div>
          <div className="silver-buttons">
            <button className="silver-button">constructions</button>
          </div>
          <div>
            <a href="#" className="learn-more">Learn More</a>
          </div>
      </div>
    </div>
  );
};

export default NewsPage;
