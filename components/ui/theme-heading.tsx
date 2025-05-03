import { cn } from "@/lib/utils"
import type React from "react"

interface ThemeHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6
  variant?: "default" | "gradient" | "underline" | "highlight"
  children: React.ReactNode
}

export function ThemeHeading({ level = 2, variant = "default", className, children, ...props }: ThemeHeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  const sizeClasses = {
    1: "text-4xl font-extrabold lg:text-5xl tracking-tight",
    2: "text-3xl font-bold tracking-tight",
    3: "text-2xl font-bold tracking-tight",
    4: "text-xl font-semibold tracking-tight",
    5: "text-lg font-semibold tracking-tight",
    6: "text-base font-semibold tracking-tight",
  }

  const variantClasses = {
    default: "text-foreground",
    gradient: "theme-gradient-text",
    underline: "border-b pb-2 border-primary/30",
    highlight: "bg-primary/10 text-primary px-2 py-1 rounded-md inline-block",
  }

  return (
    <Component className={cn(sizeClasses[level], variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  )
}
