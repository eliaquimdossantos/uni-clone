"use client";

import UniclubeSwiper from "../molecules/UniclubeSwiper";
import CompaniesCircleButton from "../molecules/CompaniesCircleButton";

const departments = [
  { imgSrc: "/riocenter.webp", name: "Rio Center" },
  { imgSrc: "/ecologica.webp", name: "Ecológica" },
  { imgSrc: "/petclive.webp", name: "Petclive Clínica Veterinária 24h" },
  { imgSrc: "/oticasdmais.webp", name: "Óticas D'Mais" },
  { imgSrc: "/auri-autopecas.webp", name: "Auri Autopeças" },
  { imgSrc: "/3dots.webp", name: "Ver mais empresas" },
];

export default function CompaniesCarousel() {
  return (
    <UniclubeSwiper
      id="companies_menu"
      items={departments}
      renderItem={
        (dept: { imgSrc: string, name: string }) =>
          <CompaniesCircleButton imgSrc={dept.imgSrc} caption={dept.name} />}
      slidesPerViewConfig={{
        '@0.00': { slidesPerView: 2 },
        '@0.75': { slidesPerView: 3 },
        '@1.00': { slidesPerView: 4 },
        '@1.50': { slidesPerView: 5 },
      }}
      freeMode={true}
    />
  );
}