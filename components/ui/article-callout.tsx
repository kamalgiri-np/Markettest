import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info, AlertTriangle, HelpCircle, type LucideIcon } from "lucide-react"
import type React from "react"

type CalloutType = "info" | "warning" | "error" | "success" | "tip"

interface ArticleCalloutProps {
  type?: CalloutType
  title?: string
  children: React.ReactNode
  className?: string
}

const calloutIcons: Record<CalloutType, LucideIcon> = {
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
  success: CheckCircle,
  tip: HelpCircle,
}

const calloutStyles: Record<CalloutType, string> = {
  info: "border-blue-500 bg-blue-500/10 dark:bg-blue-500/5",
  warning: "border-amber-500 bg-amber-500/10 dark:bg-amber-500/5",
  error: "border-red-500 bg-red-500/10 dark:bg-red-500/5",
  success: "border-green-500 bg-green-500/10 dark:bg-green-500/5",
  tip: "border-purple-500 bg-purple-500/10 dark:bg-purple-500/5",
}

const iconColors: Record<CalloutType, string> = {
  info: "text-blue-500",
  warning: "text-amber-500",
  error: "text-red-500",
  success: "text-green-500",
  tip: "text-purple-500",
}

export function ArticleCallout({ type = "info", title, children, className }: ArticleCalloutProps) {
  const Icon = calloutIcons[type]

  return (
    <div className={cn("article-callout", calloutStyles[type], className)}>
      <div className="article-callout-title">
        <Icon className={cn("article-callout-icon", iconColors[type])} />
        <span>{title || type.charAt(0).toUpperCase() + type.slice(1)}</span>
      </div>
      <div>{children}</div>
    </div>
  )
}
