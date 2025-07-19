import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src='/him.png' className='object-fit-cover w-100 h-100' /></SwiperSlide>
        <SwiperSlide><img src='/pexels-lazarus-ziridis-351891426-31031008.jpg' className='object-fit-cover w-100 h-100' /></SwiperSlide>
        <SwiperSlide><img src='/pexels-philboakye-1813947.jpg' className='object-fit-cover w-100 h-100' /></SwiperSlide>
        <SwiperSlide><img src='/pexels-pixabay-157675.jpg' className='object-fit-cover w-100 h-100' /></SwiperSlide>
        <SwiperSlide><img src='/pexels-unpetitvoyou-1750272-3317133.jpg' className='object-fit-cover w-100 h-100' /></SwiperSlide>
      </Swiper>
    </>
  );
}
