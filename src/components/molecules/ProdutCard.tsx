import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface ProductCardProps {
  imgSrc: string;  
  children: ReactNode;
}

export default function ProductCard({ imgSrc, children }: ProductCardProps) {
  const router = useRouter();

  return (
    <div
    className="w-[12em] h-[24em] bg-white shadow-lg rounded-md overflow-hidden flex flex-col 
    hover:shadow-lg hover:shadow-primary-200 cursor-pointer"
      onClick={() => router.push('#')}
    >
      <div className="relative w-full aspect-square">
        <Image
          src={imgSrc}
          alt="Imagem de Produto"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4 flex-1">{children}</div>
    </div>
  );
}
