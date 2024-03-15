// NewsDetails.jsx
import './NewsPage.css'; 
import React from 'react';

const NewsDetails = ({ newsItem }) => {
    const { title, image, content } = newsItem;
  
    return (
      <div className="news-details">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{content}</p>
      </div>
    );
  };
export default NewsDetails;
