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
    <div className="slider-container relative flex">
      <div className="flex w-3/5">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="slider-image active object-fit-cover"
        />
      </div>
      <div className="flex-1 w-2/5 flex flex-col">
        <div className=" flex-1">
          <img
            src={images[(currentImageIndex + 1) % images.length]}
            alt={`Image ${(currentImageIndex + 1) % images.length}`}
            className="slider-image active object-fit-cover"
          />
        </div>
        <div className="flex-1">
          <img
            src={images[(currentImageIndex + 2) % images.length]}
            alt={`Image ${(currentImageIndex + 2) % images.length}`}
            className="slider-image active object-fit-cover"
          />
        </div>
      </div>
      <div className="dots-container fixed bottom-4 left-0 right-0 flex justify-end mr-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentImageIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

IntroImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IntroImageSlider;
