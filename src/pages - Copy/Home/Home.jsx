import React, { useRef, useState, useEffect } from "react";
import Navigation from "../../component/Navigation/Navigation.jsx";
import "./Home.css";
import IntroText from "../../component/HomeComponent/IntroText.jsx";
import ProductIntroCard from "../../component/HomeComponent/ProductInroCard.jsx";
import SolarCoverImage from "../../assets/solar.jpg";
import ConstructionCoverImage from "../../assets/construction.jpg";

const Home = () => {
  return (
    <div className="home">
      <IntroText />
      <ProductIntroCard
        image={SolarCoverImage}
        serviceTitle="Solar Panels"
        orderLink="/energy-order"
        learnMoreLink="/solar-learnmore"
      />
      <ProductIntroCard
        image={ConstructionCoverImage}
        serviceTitle="Constructions"
        orderLink="/new-building-consultation"
        learnMoreLink="/construction-learnmore"
        textColor="#ffffff"
      />
    </div>
  );
};

export default Home;
