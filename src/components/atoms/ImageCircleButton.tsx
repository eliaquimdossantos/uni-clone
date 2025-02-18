import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
interface ImageCircleButtonProps {
  imgSrc: string;
  imgClasses?: string;
  href?: string;
  caption: string;
}

export default function ImageCircleButton({ imgSrc, imgClasses, caption, href = "#" }: ImageCircleButtonProps) {
  const router = useRouter()

  return (
    <div className="h-48"
      onClick={() => router.push(href)}>
      <div className="group cursor-pointer flex flex-col text-center items-center space-y-2">
        <div className="w-28 h-28 relative flex items-center justify-center rounded-full bg-primary-100 group-hover:bg-primary-500/30 transition-colors">
          <img
            className={imgClasses}
            alt={'name'}
            src={imgSrc}
          />
        </div>
        <span className="text-sm font-medium text-primary-900 group-hover:font-bold transition-all">
          {caption}
        </span>
      </div>
    </div>
  );
};

