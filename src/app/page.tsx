'use client';

import Navbar from "@/components/organisms/Navbar";
import CarouselSection from "@/components/organisms/CarouselSection";
import DepartmentsSection from "@/components/organisms/DepartmentsSection";
import DiscountsSection from "@/components/organisms/DiscountsSection";
import Main from "@/components/organisms/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <CarouselSection />
        <DepartmentsSection />
        <DiscountsSection />
      </Main>
    </>
  );
}
