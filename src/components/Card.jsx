import React from "react";
import image1 from "../assets/HomePage.png";
import image2 from "../assets/Button.png"; // Right Arrow
import image3 from "../assets/buttonLeft.png"; // Left Arrow

function Card({ swiperRef }) {
  return (
    <div className="relative w-full">
      {/* Main Image */}
      <img src={image1} alt="" className="w-full" />

      {/* Left Arrow (Previous Slide) */}
      <img
        src={image2}
        alt="Left Arrow"
        className="absolute top-[40%] left-5 sm:left-10 transform -translate-x-1/2 border-2 w-12 sm:w-20 cursor-pointer"
        onClick={() => swiperRef.current?.slidePrev()} // Swiper Previous Slide
      />

      {/* Right Arrow (Next Slide) */}
      <img
        src={image3}
        alt="Right Arrow"
        className="absolute top-[40%] -right-5  transform -translate-x-1/2 border-2 w-12 sm:w-20 cursor-pointer"
        onClick={() => swiperRef.current?.slideNext()} // Swiper Next Slide
      />
    </div>
  );
}

export default Card;
