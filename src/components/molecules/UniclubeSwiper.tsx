"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SwiperOptions } from "swiper/types";

interface UniclubeSwitchProps<T> {
  id: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerViewConfig?: { [width: number]: SwiperOptions; [ratio: string]: SwiperOptions };
  slidesPerView?: number | "auto";
  slidesClass?: string;
  spaceBetween?: number;
  loop?: boolean;
  navigation?: boolean;
  pagination?: boolean;
  freeMode?: boolean;
  className?: string;
  autoplay?: boolean | { delay: number };
}

const commonClasses = "bg-primary-500 h-20 text-white p-3 rounded-full shadow-md z-10 transition-opacity duration-300";

export default function UniclubeSwitch<T>({
  id,
  items,
  renderItem,
  slidesPerViewConfig,
  slidesPerView,
  slidesClass = "",
  spaceBetween = 16,
  loop = false,
  navigation = false,
  pagination = false,
  freeMode = false,
  className = "",
  autoplay
}: UniclubeSwitchProps<T>) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={twMerge("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {navigation && (
        <>
          <button
            className={twMerge(
              commonClasses,
              "absolute left-[-12px] top-1/2 transform -translate-y-1/2",
              clsx({ "opacity-100": isHovered, "opacity-0": !isHovered })
            )}
            id={`prev_${id}`}
            aria-label="Anterior"
          >
            &#10094;
          </button>
          <button
            className={twMerge(
              commonClasses,
              "absolute right-[-12px] top-1/2 transform -translate-y-1/2",
              clsx({ "opacity-100": isHovered, "opacity-0": !isHovered })
            )}
            id={`next_${id}`}
            aria-label="Próximo"
          >
            &#10095;
          </button>
        </>
      )}

      <Swiper
        modules={[Navigation, Pagination, FreeMode, Autoplay]} // Adicionado Autoplay
        navigation={navigation ? { prevEl: `#prev_${id}`, nextEl: `#next_${id}` } : false}
        pagination={pagination ? { clickable: true } : false}
        freeMode={freeMode}
        loop={loop}
        autoplay={autoplay ? (typeof autoplay === "boolean" ? { delay: 3000 } : autoplay) : false} // Corrigido autoplay
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        breakpoints={slidesPerViewConfig}
        className="rounded-md"
      >
        {items.map((item, index) => (
          <SwiperSlide className={slidesClass} key={index}>
            {renderItem(item, index)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
