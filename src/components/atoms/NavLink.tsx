import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface NavLinkProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function NavLink({ children, className, href = "#" }: NavLinkProps) {
  return (
    <a href={href} className={twMerge("hover:opacity-80 hover:no-underline", className)}>
      {children}
    </a>
  )
}
