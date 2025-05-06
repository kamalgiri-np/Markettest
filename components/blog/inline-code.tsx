import type React from "react"
import { cn } from "@/lib/utils"

interface InlineCodeProps {
  children: React.ReactNode
  className?: string
}

export function InlineCode({ children, className }: InlineCodeProps) {
  return <code className={cn("bg-muted px-1 py-0.5 rounded text-sm font-mono", className)}>{children}</code>
}
