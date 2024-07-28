import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NewsPage.css";
import axios from "axios";
import image13 from "../../assets/offer_solar.png";
import RambousLoader from "../../routes/RambousLoader";

const NewsPage = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [loading, setLoading] = useState(false);
  const [archiveVisible, setArchiveVisible] = useState(true);
  const [discountsVisible, setDiscountsVisible] = useState(true);

  const toggleArchiveVisibility = () => {
    setArchiveVisible(!archiveVisible);
  };

  const toggleDiscountsVisibility = () => {
    setDiscountsVisible(!discountsVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setArchiveVisible(window.innerWidth >= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/v1/admin/news");
      console.log("Loaded projects:", result.data);
      setNewsList(result.data);
    } catch (error) {
      console.error("Error loading News:", error);
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
          <div
            className={`archive-container ${archiveVisible ? "visible" : ""}`}
          >
            <div className="archive">
              {window.innerWidth < 800 && (
                <div className="back-arrow">
                  <button onClick={toggleArchiveVisibility}>&larr;</button>
                </div>
              )}
              <h2>Archive</h2>
              <div className="months">
                <ul>
                  {months.map((month, index) => (
                    <li key={index}>
                      <button type="button">{month}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pagination">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">.</a>
              <a href="#">.</a>
              <a href="#">.</a>
              <span className="arrow-container">
                <span className="arrow">&rarr;</span>
              </span>
            </div>
          </div>

          <div className="news-feed-container">
            <div className="news-head">
              {window.innerWidth < 800 && (
                <button
                  className="archive-toggle"
                  onClick={toggleArchiveVisibility}
                >
                  Archive
                </button>
              )}
              <span>News Feed</span>
            </div>
            <div className="feed-items-container">
              {newsList.map((news) => (
                <div key={news.newsId} className="feed-item">
                  <Link
                    to={{
                      pathname: `/newspage/${news.newsId}`,
                      state: { news },
                    }}
                  >
                    <img
                      src={`data:image/jpeg;base64,${news.newsImage}`}
                      alt={news.newsTitle}
                    />
                  </Link>
                  <h2>{news.newsTitle}</h2>
                  <p>{news.newsContent}</p>
                  <Link
                    to={{
                      pathname: `/newspage/${news.newsId}`,
                      state: { news },
                    }}
                  >
                    <button className="read-more">Read More</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Conditionally render the solar discounts */}
          {discountsVisible && (
            <div className="solar-discounts visible">
              <button
                className="close-button"
                onClick={toggleDiscountsVisibility}
              >
                ✖
              </button>
              <h2>Special Offer: 50% Off on Solar Products</h2>
              <p>
                Upgrade to solar energy today and save big! Limited time offer.
              </p>
              <div className="offer-container">
                <img
                  src={image13}
                  alt="Solar Panel"
                  className="solar-panel-image"
                />
                <div className="offer-buttons">
                  <button className="round-button">50% Off</button>
                </div>
              </div>
              <div className="silver-buttons">
                <button className="silver-button">
                  unbeatable solar solutions
                </button>
              </div>
              <div className="silver-buttons">
                <button className="silver-button">smart home solutions</button>
              </div>
              <div className="silver-buttons">
                <button className="silver-button">constructions</button>
              </div>
              <div>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsPage;
