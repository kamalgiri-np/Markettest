import { cn } from "@/lib/utils"
import type React from "react"

interface ThemeTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "muted" | "gradient" | "highlight"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  as?: "p" | "span" | "div"
  children: React.ReactNode
}

export function ThemeText({
  variant = "default",
  size = "md",
  as: Component = "p",
  className,
  children,
  ...props
}: ThemeTextProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
  }

  const variantClasses = {
    default: "text-foreground",
    muted: "text-muted-foreground",
    gradient: "theme-gradient-text",
    highlight: "bg-primary/10 text-primary px-1 py-0.5 rounded",
  }

  return (
    <Component className={cn(sizeClasses[size], variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  )
}
