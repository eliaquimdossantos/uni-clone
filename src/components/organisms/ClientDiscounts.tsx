import React from 'react'
import ClientDiscountsPrice from '../molecules/ClientDiscountsPrice'
import ProductCard from '../molecules/ProdutCard'
import UniclubeSwiper from '../molecules/UniclubeSwiper'

const products = [
  {
    imgSrc: '/artesanato-potiguar1.webp',
    name: 'Garrafa de areia colorida',
    price: (
      <ClientDiscountsPrice
        description={
          <>
            <del className="text-gray-700">R$ 32,90</del>
            <span className="text-danger">10% OFF</span>
          </>
        }
        price="R$ 29,61"
        paymentWays={[
          <span key={1}><b>3x R$ 6,33 sem juros</b> no cartão de crédito</span>,
          <span key={2}><b>R$ 18,50 no pix</b></span>
        ]}
      />
    ),
    seller: 'Sr. Castanha'
  },
  {
    imgSrc: '/bolsas.webp',
    name: 'Bolsas variadas de fibra de Açaí',
    price: (
      <ClientDiscountsPrice
        description={<>A partir de</>}
        price="R$ 49,90"
        paymentWays={[
          <span key={1}><b>2x de R$ 24,95 sem juros</b> no cartão de crédito</span>,
          <span key={2}><b>R$ 38,50 no pix</b></span>
        ]}
      />
    ),
    seller: 'Dandara'
  },
  {
    imgSrc: '/galinha-e-pintinhos.webp',
    name: 'Galinha e pintinhos de barro feitas a mão',
    price: (
      <ClientDiscountsPrice
        description={
          <>
            <del className="text-gray-700">R$ 32,90</del>
            <span className="text-danger">10% OFF</span>
          </>
        }
        price="R$ 14,90"
        paymentWays={[
          <span key={1}><b>R$ 13,00 no pix</b></span>
        ]}
      />
    ),
    seller: 'Patrícia Arte'
  },
  {
    imgSrc: '/panelas-barro.webp',
    name: 'Panelas de barro de São Gonçado do Amarante',
    price: (
      <ClientDiscountsPrice
        description={<>Apenas</>}
        price="R$ 29,90"
        paymentWays={[
          <span key={1}><b>2x de R$ 19,95</b> no cartão</span>,
          <span key={2}><b>R$ 23,90 no pix</b></span>
        ]}
      />
    ),
    seller: 'Sebastião Salgado'
  },
  {
    imgSrc: '/bonecas-negras.webp',
    name: 'Artesanato de bonecas negras feitas com cabaça',
    price: (
      <ClientDiscountsPrice
        description={<>A partir de</>}
        price="R$ 9,90"
        paymentWays={[
          <span key={1}><b>2x R$ 7,45</b> no cartão</span>
        ]}
      />
    ),
    seller: 'Manu Intimates'
  },
  {
    imgSrc: '/artesanato-potiguar1.webp',
    name: 'Garrafa de areia colorida',
    price: (
      <ClientDiscountsPrice
        description={
          <>
            <del className="text-gray-700">R$ 32,90</del>
            <span className="text-danger">10% OFF</span>
          </>
        }
        price="R$ 29,61"
        paymentWays={[
          <span key={1}><b>3x R$ 6,33 sem juros</b> no cartão de crédito</span>,
          <span key={2}><b>R$ 18,50 no pix</b></span>
        ]}
      />
    ),
    seller: 'Sr. Castanha'
  },
  {
    imgSrc: '/bolsas.webp',
    name: 'Bolsas variadas de fibra de Açaí',
    price: (
      <ClientDiscountsPrice
        description={<>A partir de</>}
        price="R$ 49,90"
        paymentWays={[
          <span key={1}><b>2x de R$ 24,95 sem juros</b> no cartão de crédito</span>,
          <span key={2}><b>R$ 38,50 no pix</b></span>
        ]}
      />
    ),
    seller: 'Dandara'
  },
  {
    imgSrc: '/galinha-e-pintinhos.webp',
    name: 'Galinha e pintinhos de barro feitas a mão',
    price: (
      <ClientDiscountsPrice
        description={
          <>
            <del className="text-gray-700">R$ 32,90</del>
            <span className="text-red-600">10% OFF</span>
          </>
        }
        price="R$ 14,90"
        paymentWays={[
          <span key={1}><b>R$ 13,00 no pix</b></span>
        ]}
      />
    ),
    seller: 'Patrícia Arte'
  },
  {
    imgSrc: '/panelas-barro.webp',
    name: 'Panelas de barro de São Gonçado do Amarante',
    price: (
      <ClientDiscountsPrice
        description={<>Apenas</>}
        price="R$ 29,90"
        paymentWays={[
          <span key={1}><b>2x de R$ 19,95</b> no cartão</span>,
          <span key={2}><b>R$ 23,90 no pix</b></span>
        ]}
      />
    ),
    seller: 'Sebastião Salgado'
  },
  {
    imgSrc: '/bonecas-negras.webp',
    name: 'Artesanato de bonecas negras feitas com cabaça',
    price: (
      <ClientDiscountsPrice
        description={<>A partir de</>}
        price="R$ 9,90"
        paymentWays={[
          <span key={1}><b>2x R$ 7,45</b> no cartão</span>
        ]}
      />
    ),
    seller: 'Manu Intimates'
  },
]

export default function ClientDiscountsCarousel() {
  return (
    <div className="flex flex-col py-5 px-12 gap-y-10">
      <h1 className="text-3xl text-white font-normal">Descontos cliente{' '}
        <span className="font-black text-3xl text-white">Unimed Natal</span>
      </h1>
      <UniclubeSwiper        
        id="discounts"
        items={products}
        renderItem={(product) => (
          <ProductCard imgSrc={product.imgSrc}>
            <div className="flex flex-col justify-between h-full">
              <span className="text-sm">{product.name}</span>
              {product.price}
              <span className="font-light text-xs truncate">
                Vendido por <a href="#" className="text-gray-700 underline">{product.seller}</a>
              </span>
            </div>
          </ProductCard>
        )}
        slidesClass="!w-auto !flex-none flex flex-row justify-start items-start"
        slidesPerView="auto"
        spaceBetween={18}
        navigation={true}
      />
    </div>
  );
} 