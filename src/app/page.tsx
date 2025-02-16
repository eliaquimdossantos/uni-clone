'use client';

import Navbar from "@/components/molecules/Navbar";
import CarouselSection from "@/components/organisms/CarouselSection";
import DepartmentsSection from "@/components/organisms/DepartmentsSection";
import Main from "@/components/organisms/Main";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main>
        <CarouselSection />
        <DepartmentsSection />
        {/* 
        <PageSection> */}
      </Main>
    </>
  );
}
