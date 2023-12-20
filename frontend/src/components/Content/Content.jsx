import React, { useState, useEffect } from "react";
import "./Content.css";

const Content = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [startTypewriter, setStartTypewriter] = useState(false);
  const targetText = "Delivering the Best Smart Home solutions in Sri Lanka.";

  useEffect(() => {
    const typeText = async () => {
      while (startTypewriter) {
        for (let i = 0; i < targetText.length; i++) {
          setTypewriterText((prevText) => prevText + targetText.charAt(i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }

        await new Promise((resolve) => setTimeout(resolve, 5000));

        setTypewriterText(""); // Clear text after each sentence
      }
    };

    typeText();
  }, [startTypewriter, targetText]);

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

  return (
    <div className="content">
      <div className="contentTitle">
        {/* <span></span> */}
        {/* <span>Smart Home solutions in</span> */}
        <span>{typewriterText}</span>
      </div>

      <div className="Accessories"></div>
    </div>
  );
};

export default Content;
