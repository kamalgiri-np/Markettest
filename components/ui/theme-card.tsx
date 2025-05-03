import { cn } from "@/lib/utils"
import type React from "react"

interface ThemeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "highlight" | "glass" | "gradient" | "glow"
  padding?: "none" | "sm" | "md" | "lg"
  children: React.ReactNode
}

export function ThemeCard({ variant = "default", padding = "md", className, children, ...props }: ThemeCardProps) {
  const paddingClasses = {
    none: "p-0",
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  }

  const variantClasses = {
    default: "bg-card text-card-foreground border shadow-sm",
    highlight: "bg-muted text-muted-foreground border-muted",
    glass: "theme-glass backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10",
    gradient:
      "bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900 dark:to-brand-800 text-foreground dark:text-foreground",
    glow: "bg-card text-card-foreground border theme-glow",
  }

  return (
    <div
      className={cn(
        "rounded-lg transition-all duration-300 hover:shadow-md",
        paddingClasses[padding],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
