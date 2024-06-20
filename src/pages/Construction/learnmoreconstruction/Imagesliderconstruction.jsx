import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Imagesliderconstruction.css";
import image1 from "../../../Images/cons1.jpg";
import image2 from "../../../Images/cons2.jpg";
import image3 from "../../../Images/cons3.jpg";

const ImageSliderConstruction = () => {
  const slides = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const moveDot = () => {
    setCurrentIndex(currentIndex);
  };

  useEffect(() => {
    // Automatically change the slide every 5 seconds
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
    }, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentIndex, slides.length]);
  console.log(Array.from({ length: 5 }));
  return (
    <div>
      <div className="slider-container">
        <div className="gradient"></div>
        <div class="centered-container">
          <div>
            <span className="learbmore-solar">Construction</span>
          </div>
          <div className="learnmore">
            <span>
              Pioneers sustainable construction, blending innovation and
              expertise.With <br /> eco-friendly materials and energy-efficient
              designs we shape
              <br />
              greener future while ensuring quality craftsmanship
              <br />
              and environmental stewardship.
            </span>
          </div>

          <Link to="/new-building-consultation">
            <div className="learnmore-buttonB">Consult now</div>
        </Link>
        </div>

        <div>
          <div onClick={goToPrevious} className="left-arrow">
            ❰
          </div>

          <div onClick={goToNext} className="right-arrow">
            ❱
          </div>
        </div>
        <img
          className="slide"
          src={slides[currentIndex]}
          alt={"Slide ${currentIndex + 1}"}
        />
        <div className="dots-container absolute flex flex-row bottom-2 w-full item-center justify-center">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index} // Adding key prop with a unique value
              onClick={() => moveDot(index)}
              className={currentIndex === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSliderConstruction;
