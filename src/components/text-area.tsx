import { TextareaHTMLAttributes } from "react"
import { cn } from "../lib/utils"

interface TextAreaProps {
  className?: string
}

export default function TextArea({
  className,
  ...props
}: TextAreaProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "bg-transparent focus:border-transparent h-full w-full border-none font-bold focus:outline-none focus:ring-0",
        className,
      )}
      {...props}
    ></textarea>
  )
}
