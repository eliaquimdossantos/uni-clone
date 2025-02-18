import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface PageSectionProps extends HTMLAttributes<HTMLDivElement> {
  bg?: "primary" | "white" | "transparent";
  bgImage?: string;
  bgImageRounded?: "sm" | "md" | "lg" | "none";
  className?: string;
  children: ReactNode;
}

export default function PageSection({
  bg = "transparent",
  bgImage,
  bgImageRounded = "none",
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
        className={twMerge(clsx(
          "w-full max-w-6xl gap-8 my-4", {
          "rounded-sm": bgImageRounded === "sm",
          "rounded-md": bgImageRounded === "md",
          "rounded-lg": bgImageRounded === "lg",
          "rounded-none": bgImageRounded === "none",
        }
        ), className)}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        {children}
      </div>
    </div>
  );
}
