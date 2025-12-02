import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';

export default function App() {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
     

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance
        cssMode={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay:2500, disableOnInteraction: true }} 
        modules={[Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
        <SwiperSlide><Card swiperRef={swiperRef} /></SwiperSlide>
      </Swiper>

    </div>
  );
}
