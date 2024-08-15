import { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "../lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftComponent?: ReactNode
  rightComponent?: ReactNode
}

export default function Button({
  leftComponent,
  rightComponent,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "50 flex gap-2 rounded-xl border border-primary-light bg-primary px-6 py-3 font-bold",
        className,
      )}
      {...props}
    >
      {leftComponent}
      <span>{children}</span>
      {rightComponent}
    </button>
  )
}
