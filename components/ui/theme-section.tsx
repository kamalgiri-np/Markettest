import { cn } from "@/lib/utils"
import type React from "react"

interface ThemeSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "alt" | "gradient" | "glass"
  spacing?: "sm" | "md" | "lg" | "none"
  container?: boolean
  children: React.ReactNode
}

export function ThemeSection({
  variant = "default",
  spacing = "md",
  container = true,
  className,
  children,
  ...props
}: ThemeSectionProps) {
  const spacingClasses = {
    none: "py-0",
    sm: "py-section-y-sm",
    md: "py-section-y",
    lg: "py-section-y-lg",
  }

  const variantClasses = {
    default: "bg-background text-foreground",
    alt: "bg-muted text-muted-foreground",
    gradient:
      "bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/50 dark:to-brand-800/50 text-foreground dark:text-foreground",
    glass: "backdrop-blur-md bg-white/70 dark:bg-black/70 border-y border-white/20 dark:border-white/10",
  }

  return (
    <section className={cn(variantClasses[variant], spacingClasses[spacing], className)} {...props}>
      <div className={cn(container && "container px-4 md:px-6")}>{children}</div>
    </section>
  )
}
