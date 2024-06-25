import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewsPage.css';
import axios from "axios";

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
import { faBars } from '@fortawesome/free-solid-svg-icons';
import RambousLoader from "../../routes/RambousLoader";



const NewsPage = () => {



  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [loading, setLoading] = useState(false);
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

  const [newsList, setNewsList] = useState([]);


  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    try {
      const result = await axios.get("https://sevosmarttech-efce83f08cbb.herokuapp.com/api/v1/admin/news");
      console.log('Loaded projects:', result.data);
      setNewsList(result.data);
    } catch (error) {
      console.error('Error loading News:', error);
    } finally {
      setLoading(false);
    }
  };




  return (
    <div>
      {loading ? (
        <RambousLoader />
      ) : (

        <div className="news-page">
          <div className={`archive-container ${archiveVisible ? 'visible' : ''}`}>

            <div className="archive">
              {window.innerWidth < 800 && (
                <div className="back-arrow">
                  <button onClick={toggleArchiveVisibility}>
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
                      <button type="button">{month}</button>
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
                <div key={news.newsId} className="feed-item">
                  <Link to={{ pathname: `/newspage/${news.newsId}`, state: { news } }}>
                    <img src={`data:image/jpeg;base64,${news.newsImage}`} alt={news.newsTitle} />
                  </Link>
                  <h2>{news.newsTitle}</h2>
                  <p>{news.newsContent}</p>
                  <Link to={{ pathname: `/newspage/${news.newsId}`, state: { news } }}>
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
      )}
    </div>

  );
};

export default NewsPage;
