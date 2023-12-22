import React, { useRef, useState, useEffect } from "react";
import { debounce } from "lodash";
import Navigation from "../../Components/Navigation/Navigation.jsx";
import ContentSolar from "../../Components/Content/ContentSolar";
import ContentConstructions from "../../Components/Content/ContentConstructions";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import Content from "../../Components/Content/Content";

const Home = () => {
  const contentRefs = [useRef(null), useRef(null), useRef(null)];
  const [activeSlide, setActiveSlide] = useState(0);

  const handleWheelScroll = debounce((event) => {
    const deltaY = event.deltaY;
    const scrollDelta = deltaY > 0 ? 1 : -1;
    const newSlide = Math.max(0, Math.min(activeSlide + scrollDelta, 2));

    if (newSlide !== activeSlide) {
      setActiveSlide(newSlide);

      // Manually scroll to the new slide position
      const targetPosition = contentRefs[newSlide].current.offsetTop;

      // Use smooth scroll to the target position
      smoothScrollTo(targetPosition);
    }
  }, 800); // Adjust the debounce time as needed

  const smoothScrollTo = (targetPosition) => {
    const currentPosition = window.scrollY;
    const distance = targetPosition - currentPosition;

    const startTime = performance.now();
    const duration = 800; // Adjust as needed

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easing = easeInOutQuad(progress);
      window.scrollTo(0, currentPosition + distance * easing);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  useEffect(() => {
    const handleScroll = () => {
      const currentSlide = Math.floor(window.scrollY / window.innerHeight);
      setActiveSlide(currentSlide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="Home" onWheel={handleWheelScroll}>
      <Navigation />

      <div className="slides-container">
        <div ref={contentRefs[0]}>
          <Content />
        </div>
        <div ref={contentRefs[1]}>
          <ContentSolar />
        </div>
        <div ref={contentRefs[2]}>
          <ContentConstructions />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
