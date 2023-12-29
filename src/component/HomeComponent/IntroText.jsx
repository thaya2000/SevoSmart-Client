import React, { useState, useEffect } from "react";
import "./IntroText.css";
import ProductIntroCard from "./ProductInroCard";
import SolarCoverImage from "../../assets/solar.jpg";

const HomeComponent = ({}) => {
  const [typewriterText, setTypewriterText] = useState("");
  const [startTypewriter, setStartTypewriter] = useState(false);
  const targetText = "Delivering the Best Smart Home solutions in Sri Lanka.";

  useEffect(() => {
    const typeText = async () => {
      const timeoutId = setTimeout(() => {
        setStartTypewriter(true);
      }, 1000);
      while (startTypewriter) {
        for (let i = 0; i < targetText.length; i++) {
          setTypewriterText((prevText) => prevText + targetText.charAt(i));
          await new Promise((resolve) => setTimeout(resolve, 150));
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setTypewriterText("");
      }
    };
    typeText();
  }, [startTypewriter, targetText]);

  /*
  useEffect(() => {
    // Start the typewriter effect after a delay
    const timeoutId = setTimeout(() => {
      setStartTypewriter(true);
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      setStartTypewriter(false); // Stop the typewriter loop
      clearTimeout(timeoutId);
    };
  }, []);
  */

  return (
    <div className="homepage-section">
      <div className="intro-section">
        <span>{typewriterText}</span>
      </div>
    </div>
  );
};

export default HomeComponent;
