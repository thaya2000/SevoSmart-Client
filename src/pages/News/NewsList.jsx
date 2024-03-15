// NewsList.jsx
import './NewsPage.css'; 
import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ news, onSelect }) => {
    return (
      <div className="news-list">
        <h2>Latest News</h2>
        <ul>
          {news.map((newsItem) => (
            <li key={newsItem.id} onClick={() => onSelect(newsItem)}>
              {newsItem.title}
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default NewsList;
