import { cn } from "@/lib/utils"
import type React from "react"

interface ThemeBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "secondary" | "destructive" | "gradient" | "glow"
  children: React.ReactNode
}

export function ThemeBadge({ variant = "default", className, children, ...props }: ThemeBadgeProps) {
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/80",
    outline: "text-foreground border border-border hover:bg-muted",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    gradient:
      "bg-gradient-to-r from-brand-600 to-brand-400 text-white hover:from-brand-700 hover:to-brand-500 dark:from-brand-500 dark:to-brand-300 dark:text-black dark:hover:from-brand-600 dark:hover:to-brand-400",
    glow: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_10px_rgba(0,149,255,0.5)] hover:shadow-[0_0_15px_rgba(0,149,255,0.7)]",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
