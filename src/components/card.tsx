import { PropsWithChildren } from "react"
import { cn } from "../lib/utils"

interface CardProps {
  className?: string
}

const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  return (
    <div
      className={cn(
        "flex min-h-[21.5rem] w-full flex-col rounded-3xl border-2 border-neutral-200 bg-neutral-500/80 p-6",
        className,
      )}
    >
      {children}
    </div>
  )
}

Card.Header = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col">
      <div className="pl-2">{children}</div>

      <hr className="my-4 border-neutral-200" />
    </div>
  )
}

Card.Body = ({ children }: PropsWithChildren) => {
  return <div className="flex-1">{children}</div>
}

Card.Footer = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>
}

export default Card
