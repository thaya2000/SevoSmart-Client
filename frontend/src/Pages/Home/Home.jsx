import React, { useRef, useEffect } from "react";

import ContentSolar from "../../Components/Content/ContentSolar";
import ContentConstructions from "../../Components/Content/ContentConstructions";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import Content from "../../Components/Content/Content";
import Navigation from "../../Components/Navigation/Navigation";

const Home = () => {
  const contentRef = useRef(null);
  const contentSolarRef = useRef(null);
  const contentConstructionsRef = useRef(null);

  const handleWheelScroll = (event) => {
    const deltaY = event.deltaY;

    if (deltaY > -0.75) {
      // Scroll down to the next section
      if (
        contentSolarRef.current &&
        window.scrollY < contentSolarRef.current.offsetTop
      ) {
        contentSolarRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (
        contentConstructionsRef.current &&
        window.scrollY < contentConstructionsRef.current.offsetTop
      ) {
        contentConstructionsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll up to the previous section
      if (
        contentSolarRef.current &&
        window.scrollY < contentSolarRef.current.offsetTop
      ) {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (
        contentConstructionsRef.current &&
        window.scrollY < contentConstructionsRef.current.offsetTop
      ) {
        contentSolarRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheelScroll);

    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);

  return (
    <div className="Home">
      <Navigation/>
      <Content ref={contentRef} />
      <div ref={contentSolarRef}>
        <ContentSolar />
      </div>
      <div ref={contentConstructionsRef}>
        <ContentConstructions />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
