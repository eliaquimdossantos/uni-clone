/* eslint-disable @next/next/no-img-element */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";

const images = ["/banner1.svg", "/banner2.svg"];

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-[95%] m-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Botão Anterior */}
      <button
        className={`absolute left-[-12px] top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-3 rounded-full shadow-md z-10 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        id="prev"
        aria-label="banner anterior"
      >
         &#10094;
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{ prevEl: "#prev", nextEl: "#next" }}
        loop={true}
        className="rounded-md"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botão Próximo */}
      <button
        className={`absolute right-[-12px] top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-3 rounded-full shadow-md z-10 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        id="next"
        aria-label="próximo banner"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
