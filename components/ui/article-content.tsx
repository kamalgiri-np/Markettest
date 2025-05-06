import type React from "react"

interface ArticleContentProps {
  children: React.ReactNode
  className?: string
}

export function ArticleContent({ children, className = "" }: ArticleContentProps) {
  return <div className={`article-content ${className}`}>{children}</div>
}
