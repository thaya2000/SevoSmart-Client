import React, { useRef, useState, useEffect } from "react";
import Navigation from "../../Components/Navigation/Navigation.jsx";
import ContentSolar from "../../Components/Content/ContentSolar";
import ContentConstructions from "../../Components/Content/ContentConstructions";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import Content from "../../Components/Content/Content";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'

const Home = () => {
  

  return (

      <Fullpage>
        <FullPageSections>
        
            <Navigation />
          
          <FullpageSection>
            <Content />
          </FullpageSection>
          <Navigation />
          <FullpageSection>
            <ContentSolar />
          </FullpageSection>
          <Navigation />
          <FullpageSection>
            <ContentConstructions />
            
          </FullpageSection>
          {/* <FullpageSection style={{ height: "50vh" }}>
          <Footer/>
          </FullpageSection> */}
        </FullPageSections>
        
      </Fullpage>

  );
};

export default Home;
