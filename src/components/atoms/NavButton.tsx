import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface NavButtonProps {
  children?: ReactNode
  icon: ReactNode
  className?: string,
  collapse?: boolean,
}

export default function NavButton({ children, icon, className, collapse = false }: NavButtonProps) {
  return (
    <button className={twMerge("hover:opacity-85 text-primary-900", className)}>
      <div className="flex items-center gap-1 justify-center">
        <div className="flex">
          {icon}
        </div>
        <div
          className={`text-left text-sm ${collapse && 'hidden md:block'}`}>
          {children}
        </div>
      </div>
    </button>
  )
}