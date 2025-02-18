import ImageCircleButton from '../atoms/ImageCircleButton';

interface DepartmentCircleButtonProps {
  imgSrc: string;
  caption: string;
}

export default function DepartmentCircleButton({ imgSrc, caption }: DepartmentCircleButtonProps) {
  return (
    <ImageCircleButton href="#botao-departamento" imgClasses="p-5" imgSrc={imgSrc} caption={caption} />
  )
}
