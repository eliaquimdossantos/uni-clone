import ImageCircleButton from '../atoms/ImageCircleButton';

interface DepartmentCircleButtonProps {
  imgSrc: string;
  caption: string;
}

export default function DepartmentCircleButton({ imgSrc, caption }: DepartmentCircleButtonProps) {
  return (
    <ImageCircleButton imgSrc={imgSrc} caption={caption} />
  )
}
