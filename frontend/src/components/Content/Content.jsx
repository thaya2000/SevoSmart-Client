import React, { useState, useEffect } from "react";
import "./Content.css";

const Content = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [startTypewriter, setStartTypewriter] = useState(false);
  const targetText = "Sri Lanka.";

  useEffect(() => {
    if (startTypewriter) {
      const typeText = async () => {
        for (let i = 0; i < targetText.length; i++) {
          setTypewriterText((prevText) => prevText + targetText.charAt(i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      };

      typeText();
    }
  }, [startTypewriter, targetText]);

  useEffect(() => {
    // Start the typewriter effect after a delay
    const timeoutId = setTimeout(() => {
      setStartTypewriter(true);
    }, 1500);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="content">
      <div className="contentTitle">
        <span>Delivering the Best</span>
        <span>Smart Home solutions in</span>
        <span>{typewriterText}</span>
      </div>

      <div className="Accessories"></div>
    </div>
  );
};

export default Content;
