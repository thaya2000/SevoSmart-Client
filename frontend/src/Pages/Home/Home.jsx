import React from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import Content from '../../Components/Content/Content';
import ContentSolar from '../../Components/Content/ContentSolar';
import ContentConstructions from '../../Components/Content/ContentConstructions';
import Footer from '../../Components/footer/Footer'; // Corrected import path
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
        <Content />
        <ContentSolar />
        <ContentConstructions />
    </div>
  );
};

export default Home;
