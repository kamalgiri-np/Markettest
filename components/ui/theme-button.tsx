import { cn } from "@/lib/utils"
import type React from "react"

interface ThemeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "gradient" | "glow"
  size?: "sm" | "md" | "lg" | "icon"
  children: React.ReactNode
}

export function ThemeButton({ variant = "primary", size = "md", className, children, ...props }: ThemeButtonProps) {
  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
    icon: "h-10 w-10",
  }

  const variantClasses = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    gradient:
      "bg-gradient-to-r from-brand-600 to-brand-400 text-white hover:from-brand-700 hover:to-brand-500 dark:from-brand-500 dark:to-brand-300 dark:text-black dark:hover:from-brand-600 dark:hover:to-brand-400",
    glow: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,149,255,0.5)] hover:shadow-[0_0_25px_rgba(0,149,255,0.7)]",
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
