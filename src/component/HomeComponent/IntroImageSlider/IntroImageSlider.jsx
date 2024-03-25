import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./IntroImageSlider.css";

const IntroImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slider-container relative flex flex-col">
      <div className="flex w-full flex-row h-9/10">
        <div className="flex w-full">
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            className="slider-image active object-fit-cover"
          />
        </div>
        <div className="flex w-full h-full flex-col">
          <div className="flex w-full h-1/2">
            <img
              src={images[(currentImageIndex + 1) % images.length]}
              alt={`Image ${(currentImageIndex + 1) % images.length}`}
              className="slider-image active object-fit-cover"
            />
          </div>
          <div className="flex w-full h-1/2">
            <img
              src={images[(currentImageIndex + 2) % images.length]}
              alt={`Image ${(currentImageIndex + 2) % images.length}`}
              className="slider-image active object-fit-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end  items-center  h-1/10 mr-0 md:mr-10">
        <div className="dots-container">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImageIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

IntroImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IntroImageSlider;
