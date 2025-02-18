import ImageCircleButton from '../atoms/ImageCircleButton';

interface CompaniesCircleButtonPrpos {
  imgSrc: string;
  caption: string;
}

export default function CompaniesCircleButton({ imgSrc, caption }: CompaniesCircleButtonPrpos) {
  return (
    <ImageCircleButton href="#botao-empresa" imgClasses="rounded-full p-2" imgSrc={imgSrc} caption={caption} />
  )
}
