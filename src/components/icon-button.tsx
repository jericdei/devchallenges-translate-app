import { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "../lib/utils"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
}

export default function IconButton({
  icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-xl border-2 border-neutral-200 p-2 active:bg-neutral-200/30",
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  )
}
