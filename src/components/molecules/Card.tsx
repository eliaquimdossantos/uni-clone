import Image from 'next/image'
import React, { ReactNode } from 'react'

interface ProductCardProps {
  imgSrc: string;
  children: ReactNode
}

export default function ProductCard({imgSrc, children}: ProductCardProps) {
  return (
    <div className="w-52 h-24"> 
      <Image src={imgSrc} width={24} height={24} alt="Imagem de Produto" />
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}
