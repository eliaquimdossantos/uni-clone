"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import Department from "../molecules/Departmet";

const departments = [
  { imgSrc: "/book.webp", name: "Arte, Papelaria e Armarinho" },
  { imgSrc: "/health.webp", name: "Saúde" },
  { imgSrc: "/t-shirt.webp", name: "Calçados, Roupas e Bolsas" },
  { imgSrc: "/baby.webp", name: "Bebês" },
  { imgSrc: "/sofa.webp", name: "Casa, Móveis e Decoração" },
  { imgSrc: "/gym.webp", name: "Esportes e Fitness" },
  { imgSrc: "/mirror.webp", name: "Beleza e Cuidado Pessoal" },
  { imgSrc: "/key.webp", name: "Imóveis" },
  { imgSrc: "/glasses.webp", name: "Óculos" },
  { imgSrc: "/ticket.webp", name: "Serviços" },
];

export default function Departments() {
  return (
    <div className="w-full overflow-x-auto p-2">
      <Swiper
        spaceBetween={16}
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 2 }, // Telas muito pequenas
          640: { slidesPerView: 4 },   // Telas médias
          768: { slidesPerView: 5 },   // Telas grandes
          1024: { slidesPerView: 7 },  // Telas muito grandes
        }}
        className="px-4 py-2"
      >
        {departments.map((dept, index) => (
          <SwiperSlide key={index} className="w-auto">
            <Department imgSrc={dept.imgSrc} name={dept.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
