import { cn } from "@/lib/utils"
import type React from "react"

interface ArticleStylesProps {
  children: React.ReactNode
  className?: string
}

export function ArticleStyles({ children, className }: ArticleStylesProps) {
  return <div className={cn("article-content", className)}>{children}</div>
}
