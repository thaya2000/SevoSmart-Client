import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css/swiper.css';
import 'swiper/css/effect-coverflow.css';
import 'swiper/css/pagination.css';
import 'swiper/css/navigation.css';
import image1 from "../pages/assets/Images/Sevopro/pro1.jpg";
import image2 from "../pages/assets/Images/Sevopro/pro2.jpg";
import image3 from "../pages/assets/Images/Sevopro/pro3.jpg";
import image4 from "../pages/assets/Images/Sevopro/pro4.jpg";
import image5 from "../pages/assets/Images/Sevopro/pro5.jpg";
import image6 from "../pages/assets/Images/Sevopro/pro6.jpg";
import image7 from "../pages/assets/Images/Sevopro/pro7.jpg";
import image8 from "../pages/assets/Images/Sevopro/pro8.jpg";
import image9 from "../pages/assets/Images/Sevopro/pro9.jpg";
import image10 from "../pages/assets/Images/Sevopro/pro10.jpg";
import image11 from "../pages/assets/Images/Sevopro/pro11.jpg";
import image12 from "../pages/assets/Images/Sevopro/pro12.jpg";
import image13 from "../pages/assets/Images/Sevopro/pro13.jpg";
import image14 from "../pages/assets/Images/Sevopro/pro14.jpg";

// Initialize Swiper core modules
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

function SwiperSlides() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        className="swiper_container"
      >
        {/* Add SwiperSlides with images */}
        <SwiperSlide>
          <img src={image1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image13} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image14} alt="slide_image" />
        </SwiperSlide>
      </Swiper>

      {/* Add slider control buttons */}
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default SwiperSlides;