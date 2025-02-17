import { ReactNode } from "react"

interface MainProps {
  children: ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="flex flex-col items-center justify-center w-full px-4">
      <div className="w-full flex flex-col">
        {children}
      </div>
    </main>
  )
}