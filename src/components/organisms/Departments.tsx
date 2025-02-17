"use client";

import DepartmentCircleButton from "../molecules/DepartmentCircleButton";
import UniclubeSwiper from "../molecules/UniclubeSwiper";

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

export default function DepartmentsCarousel() {
  return (
    <UniclubeSwiper
      id="departments_home"
      items={departments}
      renderItem={(dept: { imgSrc: string, name: string }) => <DepartmentCircleButton imgSrc={dept.imgSrc} caption={dept.name} />}
      slidesPerViewConfig={{
        '@0.00': { slidesPerView: 3 },
        '@0.75': { slidesPerView: 5 },
        '@1.00': { slidesPerView: 6 },
        '@1.50': { slidesPerView: 8 },
      }}
      freeMode={true}
    />
  );
}