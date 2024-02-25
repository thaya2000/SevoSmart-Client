import { useState, useEffect } from "react";
import "./IntroText.css";

const Introtext = () => {
  const [typewriterText, setTypewriterText] = useState("");
  const [startTypewriter, setStartTypewriter] = useState(false);
  const targetText = "Delivering the Best Smart Home solutions in Sri Lanka.";

  useEffect(() => {
    const typeText = async () => {
      setTimeout(() => {
        setStartTypewriter(true);
      }, 20);

      while (startTypewriter) {
        for (let i = 0; i < targetText.length; i++) {
          setTypewriterText((prevText) => prevText + targetText.charAt(i));
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setTypewriterText("");
      }
    };
    typeText();
  }, [startTypewriter, targetText]);

  return (
    <div className="homepage-section">
      <div className="intro-section">
        <span>{typewriterText}</span>
      </div>
    </div>
  );
};

export default Introtext;
