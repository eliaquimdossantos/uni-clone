import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface PageSectionProps extends HTMLAttributes<HTMLDivElement> {
  bg?: "primary" | "white" | "transparent";
  bgImage?: string;
  className?: string;
  children: ReactNode;
}

export default function PageSection({
  bg = "transparent",
  bgImage,
  children,
  className,
  ...props
}: PageSectionProps) {
  return (
    <div
      className={twMerge(
        clsx("w-full flex flex-col items-center justify-center", {
          "bg-primary-100": bg === "primary",
          "bg-white": bg === "white",
          "bg-transparent": bg === "transparent",
        })
      )}
      {...props}
    >
      <div
        className={twMerge("w-full max-w-5xl gap-8 my-8", className)}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        {children}
      </div>
    </div>
  );
}
