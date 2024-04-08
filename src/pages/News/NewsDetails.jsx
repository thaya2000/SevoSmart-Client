// NewsDetails.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetails.css';
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

const newsData = [
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
];

const NewsDetails = () => {
  const { id } = useParams();
  const news = newsData.find(item => item.id === parseInt(id));

  if (!news) {
    return <div className="news-details">News not found</div>;
  }

  return (
    <div className="news-details">
      <h1>{news.title}</h1>
      <img src={news.image} alt={news.title} className="large-image" />
      <p>{news.content}</p>
    </div>
  );
};

export default NewsDetails;
