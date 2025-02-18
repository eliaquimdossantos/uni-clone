/* eslint-disable @next/next/no-img-element */
"use client";

import UniclubeSwiper from "./UniclubeSwiper";

const images = ["/banner1.svg", "/banner2.svg"];

export default function CarouselBanner() {
  return (
    <UniclubeSwiper
      id="carousel"
      items={images}
      autoplay={{ delay: 5000 }}
      renderItem={(src, index) => <img src={src} alt={`Slide ${index + 1}`} className="w-full" />}
      slidesPerViewConfig={{ 320: { slidesPerView: 1 }, 768: { slidesPerView: 1 } }}
      loop={true}
      navigation={true}      
    />
  );
}
