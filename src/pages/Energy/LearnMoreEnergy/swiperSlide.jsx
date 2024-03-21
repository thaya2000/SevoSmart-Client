import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiperSlide.css';

// Import Swiper styles

import image1 from "../../../Images/pro1.jpg";
import image2 from "../../../Images/pro2.jpg";
import image3 from "../../../Images/pro3.jpg";
import image4 from "../../../Images/pro4.jpg";
import image5 from "../../../Images/pro5.jpg";
import image6 from "../../../Images/pro6.jpg";
import image7 from "../../../Images/pro7.jpg";
import image8 from "../../../Images/pro8.jpg";
import image9 from "../../../Images/pro9.jpg";
import image10 from "../../../Images/pro10.jpg";
import image11 from "../../../Images/pro11.jpg";
import image12 from "../../../Images/pro12.jpg";
import image13 from "../../../Images/pro13.jpg";
import image14 from "../../../Images/pro14.jpg";

function SwiperSlides() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14
  ];

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.activeIndex);
  };

  // const goToPrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  return (
    <div className="containerA">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
        }}
        className="swiper_containerA"
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        initialSlide={currentIndex}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className={currentIndex === index ? "active-slide" : ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="dot-containerA">
        <div className="dot-row">
          {images.map((_, index) => (
            <div
              key={index}
              className={currentIndex === index ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>

      {/* <button className="swiper-button-prev" onClick={goToPrevious}>Previous</button>
      <button className="swiper-button-next" onClick={goToNext}>Next</button> */}
    </div>
  );
}

export default SwiperSlides;
